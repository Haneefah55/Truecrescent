"use server"

import cloudinary from "@/lib/cloudinary"
import { connectDb } from "@/lib/connectDb"
import Product from "@/models/product.model"
import { redirect } from "next/navigation"

function generateSKU(name: string, category: string) {
  const clean = (text: string) =>
    text
      .replace(/[^A-Z0-9 ]/g, "") // remove special chars
      .split(" ")
      .slice(0, 2) // take first 2 words
      .join("-");

  
  const prod = clean(name).charAt(0).toUpperCase() + clean(name).slice(1);

  return prod;
}

export const addProduct = async(formData: FormData) =>{

  try {
    await connectDb()

    

    const data = {
      name: formData.get("name") as string,
      spec: formData.get("spec") as string,
      description: formData.get("description") as string,
      category: formData.get("category") as string,
      imageUrls: formData.getAll("imageUrls") as [string],
      imagePublicIds: formData.getAll("imagePublicIds") as [string],
    }

    const images = formData.getAll("images") as string[]
   

    await Product.create({
      ...data,
    })
    console.log("product added successfully")
    return{ success: true, message: "Product added successfully" }
    
  } catch (error: any) {
    if (error.code === 11000) {
      throw new Error("Product with this name already exists")
    }
    return { success: false, message: error.message || "Failed to add product" }
  }
}

export const getAllProduct = async() =>{

  try {
    await connectDb()

    const products = await Product.find().sort({ createdAt: -1 }).lean()
    const safeProducts = products.map((product) => ({
      ...product,
      id: product._id.toString(),
      createdAt: product.createdAt.toISOString(),
      updatedAt: product.updatedAt.toISOString(),
    }))

    return safeProducts


  } catch (error: any) {
    console.log(error)
    console.log("error in getAllProduct action", error)
  }
}

export const deleteProduct = async(productId: string) =>{

  try {
    await connectDb()
    const product = await Product.findById(productId)

    if(!product){
      return { success: false, message: "Product not found" }
    }

    const imagePublicIds = product.imagePublicIds

    for(const publicId of imagePublicIds) {
      await cloudinary.uploader.destroy(publicId)
    }

    await Product.findByIdAndDelete(productId)
    return { success: true, message: "Product deleted successfully" } 
  } catch (error: any) {
    console.log(error)
    return { success: false, message: error.message || "Failed to delete product" }
  } 
}

export const updateProduct = async(productId: string, formData: FormData) =>{ 

  try {
    await connectDb()

    const data = {  
      name: formData.get("name") as string,
      spec: formData.get("spec") as string,
      description: formData.get("description") as string,   
      category: formData.get("category") as string,
      images: formData.getAll("images") as [string],
    }   

    await Product.findByIdAndUpdate(productId, data)
    return { success: true, message: "Product updated successfully" } 
  } catch (error: any) {
    console.log(error)
    return { success: false, message: error.message || "Failed to update product" }
  }
}