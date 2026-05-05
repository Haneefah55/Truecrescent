import cloudinary from "@/lib/cloudinary"
import { connectDb } from "@/lib/connectDb"
import Product from "@/models/product.model"
import { redirect } from "next/navigation"



export const addProduct = async(formData: FormData) =>{

  try {
    await connectDb()

    const data = {
      name: formData.get("name") as string,
      spec: formData.get("spec") as string,
      description: formData.get("description") as string,
      price: Number(formData.get("price")),
      category: formData.get("category") as string,
    }

    const files = formData.getAll("images") as File[]
    if(files.length > 0) {
      throw new Error("Image is required")
    }

    const uploadPromises = files.map(async (file) => {
      if(!(file instanceof File)) {
        throw new Error("Invalid image file")
      }
      if(file.size > 5 * 1024 * 1024) {
        throw new Error("Image size should be less than 5MB")
      }

      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      const res: any = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            folder: "/true-crescent/products",
            resource_type: "image",
            public_id: `${Date.now()}-${file.name}`,
            overwrite: true,
            width:500,
            height:500,
            crop:"fill",
          
          },
          (error, result) => {
            if(error) {
              reject(error)
            } else {
              resolve(result)
            }
          }
        ).end(buffer)

      })

      return res.secure_url
    })

    const imageUrls = (await Promise.all(uploadPromises)).filter(Boolean)


      // Upload to cloudinary or any other cloud storage and get the URL


    const newProduct = await Product.create({
      ...data,
      images: imageUrls,


    })

    redirect("/admin/products")
  } catch (error) {
    
  }
}