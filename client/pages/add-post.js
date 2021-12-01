import PageTitle from "../components/PageTitle"
import Link from "next/link"
import styled from 'styled-components'
import Head from "next/head"
import { useState } from "react"
import axios from "axios"

export default function AddPost() {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    
    const addPost = async () => {
        const textPreview = text.substr(0,20) + '...'

        try {
            await axios.post('http://localhost:5000/api/post/add', {
                title, text, imgUrl, textPreview
            })
            .then(() => {
                setTitle('')
                setText('')
                setImgUrl('')
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Head>
                <title>Add Post</title>
            </Head>

            <PageTitle>Add Post</PageTitle>
            
            <section>
                <div className="container">
                    <FormWrapper>
                        <Form onSubmit={event => event.preventDefault()}>
                            <InputField>
                                <Label>Post Title:</Label>
                                <Input value={title} onChange={event => setTitle(event.target.value)} />
                            </InputField>
                            <InputField>
                                <Label>Post Text:</Label>
                                <Textarea value={text} onChange={event => setText(event.target.value)} />
                            </InputField>
                            <InputField>
                                <Label>Image URL:</Label>
                                <Input value={imgUrl} onChange={event => setImgUrl(event.target.value)} />
                            </InputField>
                            <button onClick={addPost} className="btn btn-primary w-100">Submit</button>
                        </Form>
                    </FormWrapper>
                </div>
            </section>
        </>
    )
}

const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Form = styled.form`
    padding: 2em;
    max-width: 500px;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
`
const InputField = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`
const Input = styled.input`
    width: 100%;
    border: 1px solid #E5E5E5;
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
`
const Textarea = styled.textarea`
    width: 100%;
    border: 1px solid #E5E5E5;
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    min-height: 150px;
    resize: none;
`
const Label = styled.label`
    font-weight: 300;
    font-size: 18px;
    line-height: 1.2em;
    margin-bottom: 5px;
`