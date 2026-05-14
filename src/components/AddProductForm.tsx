"use client"
import { addProduct } from '@/actions/products.action'
import { Loader } from 'lucide-react'
import { set } from 'mongoose'
import { useRouter } from 'next/navigation'
import React, { useState, useTransition } from 'react'
import { toast } from 'sonner'
import { string } from 'zod'

const AddProductForm = () => {
  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [description, setDescription] = useState("")
  const [isPending, startTransition] = useTransition()

  const maxLength = 500

  const router = useRouter()

  type UploadRes = {
  secure_url: string
  public_id: string
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])

    const  totalImages = images.length + files.length
    if(totalImages > 4) {
      setError("You can only upload up to 4 images")
      return
    } 
    
    for (const file of files) {
      if(file.size > 5 * 1024 * 1024) {
        setError("Image size should be less than 5MB")
        return
      }

      if(!(file instanceof File)) {
        setError("Invalid image file")
        return
      }

      if(!file.type.startsWith("image/")) {
        setError("Only image files are allowed")
        return
      }
    }

    setError("")
    const selected = [...images, ...files].slice(0, 4) // Limit to 4 images
    setImages(selected)

    const previewUrls = selected.map(file => URL.createObjectURL(file))
    setPreviewImages(previewUrls)
  }

  const uploadImageToCloudinary = async (file: File): Promise<UploadRes> => {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "true-crescent-products")

    const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: "POST",
      body: formData
    })

    const data = await res.json()
    if (!res.ok) {
      throw new Error(data.error.message || "Failed to upload image")
    }
    return { secure_url: data.secure_url, public_id: data.public_id }
  }

  const uploadImages = async (files: File[]): Promise<UploadRes[]> => {
    try {
      const urls = files.map(file => uploadImageToCloudinary(file))
      return await Promise.all(urls)
    } catch (error) {
      console.error("Error uploading images:", error)
      toast.error("Failed to upload images")
      return []
    }
  }

  const handleSubmit = async(formData: FormData) => {

    startTransition(async() => {
       try {
      const imagesUrl = await uploadImages(images)
      console.log("urls", imagesUrl)

      if(imagesUrl.length === 0) {
        setError("At least one image is required. Please try again.")
        setLoading(false)
        return
      }

      imagesUrl.forEach((url) => {
        formData.append("imageUrls", url.secure_url)
        formData.append("imagePublicIds", url.public_id)
      })


      if(formData.get("name") === null || formData.get("description") === null || formData.get("category") === null || formData.getAll("imageUrls").length === 0 || formData.get("spec") === "") {
        setError("Please fill all required fields")
        setLoading(false)
        return
      } 
          /*     for(const pair of formData.entries()) {
                console.log(pair[0], pair[1])
              }  */
              //console.log("formData", formData)
      const res = await addProduct(formData)

      if(res.error) {
        setError(res?.error)
        setLoading(false)
        

      } 

      toast.success(res?.message)
      setTimeout(() => {
        router.push('/admin/products')
      }, 2500);
    
      
      } catch (error: any) {
        console.log(error.message)
        toast.error(error.message || "Failed to add product")
      }

    })
   
  }

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index)
    const newPreview = previewImages.filter((_, i) => i !== index)
    setImages(newImages)
    setPreviewImages(newPreview)

  }

  return (
    <form action={handleSubmit} className='w-full '>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-1'>
            <p  className='font-semibold'>Product Image</p>
            <p className='text-sm'>Upload a clear product image. JPG, PNG  up to 5MB</p>
            <p className='text-xs text-gray-800'>{images.length} image(s) selected</p>
            {
              error && <p className='text-xs text-red-500'>{error}</p>
            }
            {
              previewImages.length > 0 && (
              <div className='w-full rounded-lg border bg-gray-50 p-4 text-sm text-gray-500 items-center justify-center flex flex-wrap gap-3'>
              {previewImages.map((url, index) => (
                <div key={index} className='relative'>
                  <img src={url} alt={`Preview ${index + 1}`} className='w-20 h-20 object-cover rounded-md' />
                  <button
                    type='button'
                    onClick={() => removeImage(index)}
                    className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600'
                  >
                    ×
                  </button>
                </div>
              ))}

              </div>

              )
            }
            
            <input type="file" multiple accept='image/*' className='border p-2 w-60 self-center text-center rounded-md' onChange={handleImageChange} />
          </div>
          <div className='flex flex-col sm:flex-row gap-5'>
            <div>
              <p className='font-semibold'>Product Name</p>
              <input type="text" name='name' className='border p-2 rounded-md bg-white placeholder:text-gray-500' placeholder='Enter product name' />
            </div>
            <div>
              <p className='font-semibold'>Product Specification</p>
              <input type="text" name='spec' className='border p-2 rounded-md bg-white placeholder:text-gray-500' placeholder='Enter product specification' />
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-5'>
            <div>
              <p className='font-semibold'>Price <span className='text-gray-600 ml-2 '>₦</span></p>
              <input type="number" name='price' className='border p-2 rounded-md bg-white placeholder:text-gray-500' placeholder='Enter product price' />
            </div>

            <div>
              <p className='font-semibold'>Category</p>
              <select name="category" className='border p-2 rounded-md bg-white placeholder:text-gray-500'>
                <option value="">Select category</option>
                <option value="Steel and Structural Materials">Steel & Structural Materials</option>
                <option value="Stainless Steel Materials">Stainless Steel Materials</option>
                <option value="Scaffolding and Formwork Materials">Scaffolding & Formwork Materials</option>
                <option value="Welding Consumables">Welding consumables</option>
                <option value="Paints">Paint</option>
                <option value="pipes and Accessories">Pipes & Accessories</option>
              </select>
            </div>
            

          </div>
          <div className='flex flex-col gap-1 '>
            <p className='font-semibold'>Description</p>
            <p className='text-sm text-gray-500'>Write a brief description about the product</p>
            <textarea 
              name="description" 
              id="" 
              className='border p-2 rounded-md bg-white placeholder:text-gray-500' 
              placeholder='Enter product description...' 
              maxLength={maxLength}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              cols={30}
              rows={5}
            ></textarea>
            <p className='text-xs text-gray-500'>{description.length}/{maxLength}</p>

          </div>
          <button type='button' onClick={() => router.push('/admin/products')} className='border border-gray-300 text-gray-700 py-2 cursor-pointer rounded-md hover:bg-gray-100 w-32'>
            Cancel
          </button>

          <button type='submit' className='bg-blue-600 cursor-pointer text-white py-2 rounded-md hover:bg-blue-700 w-32 self-end disabled:bg-gray-500 disabled:cursor-not-allowed' disabled={isPending}>
            {isPending ? <Loader size={25} className='animate-spin mx-auto' /> : "Add Product"}
          </button>
          
        </div>

      
    </form>
  )
}

export default AddProductForm
