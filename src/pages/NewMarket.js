import { Navigation } from "../components/Navigation/Navigation";
import styles from "./styles/NewMarket.module.scss"
import api from '../services/api'
import { useState } from "react";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export function NewMarket() {
    const [errorImage, setErrorImage] = useState(false)

    const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

    const CreateMarketFormSchema = yup.object().shape({

        superMarketName: yup.string().required('Names is mandatory'),
        superMarketMainImage: yup.mixed().required(),
        superMarketAdditionalImage1: yup.mixed(),
        superMarketAdditionalImage2: yup.mixed(),
        superMarketAdditionalImage3: yup.mixed(),


        street: yup.string().min(2).required("Street is required"),

        number: yup.number().required("Number is required"),
        district: yup.string().required("District is required"),
        zip: yup.number().required("Zip is required"),
        country: yup.string().required("Country is required"),
        city: yup.string().required("City is required"),
        state: yup.string().required("State is required"),
        superMarketDescription: yup.string().required("Please, describe your market").min(10).max(500),
        superMarketPhone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    })

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(CreateMarketFormSchema)
    })

    const { errors } = formState

    const handleCreateMarket = async (values) => {
        const form = new FormData()
        const Images = [values.superMarketMainImage]
        const validate = await Images.some(item => item.length === 0)

        if (validate) {
            setErrorImage(true)
            return
        } else {
            setErrorImage(false)
        }

        form.append('superMarketMainImage', values.superMarketMainImage[0])
        form.append('superMarketAdditionalImage1', values.superMarketAdditionalImage1[0])
        form.append('superMarketAdditionalImage2', values.superMarketAdditionalImage2[0])
        form.append('superMarketAdditionalImage3', values.superMarketAdditionalImage3[0])
        form.append('superMarketName', values.superMarketName)
        form.append('street', values.street)
        form.append('number', values.number)
        form.append('zip', values.zip)
        form.append('country', values.country)
        form.append('district', values.district)
        form.append('city', values.city)
        form.append('state', values.state)
        form.append('superMarketDescription', values.superMarketDescription)
        form.append('superMarketPhone', values.superMarketPhone)

        const response = await api.post('register', form)

        alert(response.data)

    }


    return (
        <div className={styles.container}>
            <Navigation />
            <div className={styles.content}>

                <div className={styles.header_create}>
                    <h3>Create new market</h3>
                </div>



                <form encType="multipart/form-data" onSubmit={handleSubmit(handleCreateMarket)} className={styles.form}>
                    <div>
                        <div>

                            <label >Name your market</label>
                            <input placeholder="Name market" name="Name" id='Name' {...register("superMarketName")} />
                            <span >{errors.superMarketName ? errors.superMarketName.message : ""}</span>

                            <label > Main image</label>
                            <input type="file" name="superMarketMainImage"{...register("superMarketMainImage")} />
                            <span >{errorImage ? 'Image is required' : ""}</span>

                            <label > Additional Images</label>
                            <input placeholder="01" type="file" className={styles.Additional_images} {...register("superMarketAdditionalImage1")} />
                            <span >{errorImage ? 'Image is required' : ""}</span>

                            <input placeholder="02" type="file" className={styles.Additional_images} {...register("superMarketAdditionalImage2")} />
                            <span >{errorImage ? 'Image is required' : ""}</span>

                            <input placeholder="03" type="file" className={styles.Additional_images} {...register("superMarketAdditionalImage3")} />
                            <span >{errorImage ? 'Image is required' : ""}</span>

                            <label > Location your market</label>
                            <input placeholder="Street" name="Street" {...register("street")} />
                            <span >{errors.street ? errors.street.message : ""}</span>

                            <input placeholder="Number" name=" Number" {...register("number")} />
                            <span >{errors.number ? errors.number.message : ""}</span>

                            <input placeholder="District" name="District" {...register("district")} />
                            <span >{errors.district ? errors.district.message : ""}</span>

                            <input placeholder="Zip" name="Zip"{...register("zip")} />
                            <span >{errors.zip ? errors.zip.message : ""}</span>

                            <input placeholder="Country" name="Country" {...register("country")} />
                            <span >{errors.country ? errors.country.message : ""}</span>

                            <input placeholder="City" name="City" {...register("city")} />
                            <span >{errors.city ? errors.city.message : ""}</span>

                            <input placeholder="State" name="State" {...register("state")} />
                            <span >{errors.state ? errors.state.message : ""}</span>

                        </div>

                        <div>

                            <label >Phone</label>
                            <input placeholder="Phone" id="Phone" {...register("superMarketPhone")} />
                            <span >{errors.superMarketPhone ? errors.superMarketPhone.message : ""}</span>

                            <label >Description</label>
                            <textarea placeholder="Describe your market (max:500 characters)" name="Description" {...register("superMarketDescription")} />
                            <span >{errors.superMarketDescription ? errors.superMarketDescription.message : ""}</span>
                        </div>
                    </div>
                    <button type="submit">Register</button>
                </form>

            </div>
        </div>
    )
}