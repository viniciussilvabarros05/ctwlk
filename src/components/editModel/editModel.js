import styles from "./editModel.module.scss"
import api from '../../services/api'
import { useContext } from "react";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { ContextApp } from "../../contexts/useContext";
import swal from 'sweetalert2'
import Swal from "sweetalert2";
export function EditModel(props) {

    const { marketPropsCard, setMarketPropsCard, setEditModel } = useContext(ContextApp)
    const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

    const CreateMarketFormSchema = yup.object().shape({

        superMarketName: yup.string().required('Names is mandatory'),
        superMarketMainImage: yup.mixed().required(),
        superMarketAdditionalImage: yup.mixed(),
        superMarketAdditionalImage: yup.mixed(),
        superMarketAdditionalImage: yup.mixed(),
        superMarketAdditionalImage: yup.mixed(),

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

        form.append('id', marketPropsCard._id)
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

        try {
            const response = await api.post('update', form)
            setEditModel(false)
            setMarketPropsCard('')
            props.setEdit(false)
            swal.fire({ icon: 'success', text: 'Market Updated with success' })
        } catch (error) {
            swal.fire({ icon: 'error', text: error.message })
        }

    }
    const handleDeleteMarket = (id) => {
        swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await api.delete(`delete/${id}`).then(item => {
                        setEditModel(false)
                        setMarketPropsCard('')
                        props.setEdit(false)
                    })
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                } catch (erro) {
                    Swal.fire({ icon: 'error', text: erro })
                }

            }
        })


    }

    const handleCancelUpdate = (e) => {
        const className = e.target.getAttribute('class')

        if (className === styles.container || className === styles.buttonCancel) {
            setEditModel(false)
            setMarketPropsCard('')
            props.setEdit(false)
        }
    }

    if (props.setEdit) {
        window.addEventListener('keyup', (event) => {
            if (event.code === 'Escape') {
                setEditModel(false)
                setMarketPropsCard('')
                props.setEdit(false)
            }
        })
    } else {
        return
    }

    return (
        <div onClick={handleCancelUpdate} className={styles.container}>
            <div className={styles.content} >
                <div className={styles.header_create}>
                    <h3>Edit SuperMarket</h3>
                </div>
                <form encType="multipart/form-data" onSubmit={handleSubmit(handleCreateMarket)} className={styles.form}>
                    <div>
                        <div>
                            <label >Name your market</label>
                            <input placeholder={marketPropsCard.superMarketName} {...register("superMarketName", {
                                value: marketPropsCard.superMarketName
                            })} />
                            <span >{errors.superMarketName ? errors.superMarketName.message : ""}</span>

                            <label> Main image</label>

                            <input type="file" {...register("superMarketMainImage")} />


                            <label > Additional Images</label>
                            <input placeholder="01" type="file" className={styles.Additional_images} {...register("superMarketAdditionalImage1")} />


                            <input placeholder="02" type="file" className={styles.Additional_images} {...register("superMarketAdditionalImage2")} />


                            <input placeholder="03" type="file" className={styles.Additional_images} {...register("superMarketAdditionalImage3")} />


                            <label > Location your market</label>
                            <input   {...register("street", {
                                value: marketPropsCard.superMarketLocation.street
                            })} />
                            <span >{errors.street ? errors.street.message : ""}</span>

                            <input {...register("number", {
                                value: marketPropsCard.superMarketLocation.number
                            })} />
                            <span >{errors.number ? errors.number.message : ""}</span>

                            <input {...register("district", {
                                value: marketPropsCard.superMarketLocation.district
                            })} />
                            <span >{errors.district ? errors.district.message : ""}</span>

                            <input  {...register("zip", {
                                value: marketPropsCard.superMarketLocation.zip
                            })} />
                            <span >{errors.zip ? errors.zip.message : ""}</span>

                            <input {...register("country", {
                                value: marketPropsCard.superMarketLocation.country
                            })} />
                            <span >{errors.country ? errors.country.message : ""}</span>

                            <input  {...register("city", {
                                value: marketPropsCard.superMarketLocation.city
                            })} />
                            <span >{errors.city ? errors.city.message : ""}</span>

                            <input   {...register("state", {
                                value: marketPropsCard.superMarketLocation.state
                            })} />
                            <span >{errors.state ? errors.state.message : ""}</span>

                        </div>

                        <div>
                            <label >Phone</label>
                            <input placeholder={marketPropsCard.superMarketPhone}  {...register("superMarketPhone", {
                                value: marketPropsCard.superMarketPhone
                            })} />
                            <span >{errors.superMarketPhone ? errors.superMarketPhone.message : ""}</span>

                            <label >Description</label>
                            <textarea placeholder={marketPropsCard.superMarketDescription} {...register("superMarketDescription", {
                                value: marketPropsCard.superMarketDescription
                            })} />
                            <span >{errors.superMarketDescription ? errors.superMarketDescription.message : ""}</span>
                        </div>
                    </div>
                    <div className={styles.contentButtons}>
                        <div>
                            <span className={styles.deleteOn}
                                onClick={() => { handleDeleteMarket(marketPropsCard._id) }}>
                                Delete
                            </span>
                        </div>
                        <span className={styles.buttonCancel} onClick={handleCancelUpdate}>Cancel</span>
                        <button type="submit">Update</button>
                    </div>

                </form>

            </div>
        </div>
    )
}