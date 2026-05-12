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
const slug = (name: string) => {
  const slugname= name.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")

  return slugname
}

export const addProduct = async(formData: FormData) =>{

  try {
    await connectDb()

    
    const name = formData.get("name") as string
    const spec = formData.get("spec") as string
    const description= formData.get("description") as string
    const category= formData.get("category") as string
    const imageUrls= formData.getAll("imageUrls") as [string]
    const imagePublicIds= formData.getAll("imagePublicIds") as [string]
    
    const nameSlug = slug(name)
    const categorySlug = slug(category)
    
    
    const exsiting = await Product.findOne({ name })
    if(exsiting){
      return { success: false, error: "Product already exist" }

    }
    
    await Product.create({

      name,
      spec,
      description,
      category,
      imageUrls,
      imagePublicIds,
      nameSlug,
      categorySlug
        
    })
    console.log("product added successfully")
    return{ success: true, message: "Product added successfully" }
    
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to add product" }
  }
}

export const getAllProduct = async() =>{

  try {
    await connectDb()

    const products = await Product.find().sort({ createdAt: -1 }).lean()
    const safeProducts = products.map((product) => ({
      ...product,
      createdAt: product.createdAt.toISOString(),
      updatedAt: product.updatedAt.toISOString(),
    }))

    return JSON.parse(JSON.stringify(safeProducts))


  } catch (error: any) {
    console.log("error in getAllProduct action", error)
  }
}

export const deleteProduct = async(productId: string) =>{

  try {
    await connectDb()
    const product = await Product.findById(productId)

    if(!product){
      return { success: false, error: "Product not found" }
    }

    const imagePublicIds = product.imagePublicIds

    for(const publicId of imagePublicIds) {
      await cloudinary.uploader.destroy(publicId)
    }

    await Product.findByIdAndDelete(productId)
    return { success: true, message: "Product deleted successfully" } 
  } catch (error: any) {
    console.log(error)
    return { success: false, error: error.message || "Failed to delete product" }
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

export const toggleInStock = async(id: string) => {
  try {
    await connectDb()
    const product = await Product.findById(id)
    if(!product){
      return { success: false, error: "Products not found" }
    }

    //console.log(product.stock)
    product.stock = !product.stock

    await product.save()

    
  

    return { success: true, product: JSON.parse(JSON.stringify(product)) }
  } catch (error: any) {
      //console.log(error)
      return { success: false, error: error.message }
  }
}

export const getProducts = async(pageQuery: number) =>{
  try {
    await connectDb()
    const page = pageQuery || 1
    const limit = 9
    const skip = (page - 1) * limit

    const total = await Product.countDocuments()

    const product = await Product.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit)
    const result = {
      product,
      currentPage: page,
      totalPage: Math.ceil(total / limit),
      totalProducts: total


    }

    return JSON.parse(JSON.stringify(result)) 
  } catch (error: any) {
    console.error("Error in getProducts action", error.message);
    
    
  }
}

export const getProductByCategory = async(category: string) =>{
  
  try {
    
    await connectDb()
    

    const products = await Product.find({ categorySlug: category  })
    console.log(products)
    
    return { products: JSON.parse(JSON.stringify(products)), categoryName: products[0]?.category || "" }
    
  } catch (error: any) {
    console.error("Error in getProductscategory action", error.message);
    
  }
}
export const getProduct = async(nameSlug: string) =>{
  
  try {
    
    await connectDb()
    

    const product = await Product.findOne({ nameSlug: nameSlug  })
    console.log(product)
    
    return  JSON.parse(JSON.stringify(product))
    
  } catch (error: any) {
    console.error("Error in getProduct action", error.message);
    
  }
}