import PageTitle from "../components/PageTitle"
import Link from "next/link"
import styled from 'styled-components'
import Head from "next/head"

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


export default function AddPost() {
    return (
        <>
            <Head>
                <title>Add Post</title>
            </Head>

            <PageTitle>Add Post</PageTitle>
            
            <section>
                <div className="container">
                    <FormWrapper>
                        <Form>
                            <InputField>
                                <Label>Post Title:</Label>
                                <Input />
                            </InputField>
                            <InputField>
                                <Label>Post Text:</Label>
                                <Textarea />
                            </InputField>
                            <InputField>
                                <Label>Image URL:</Label>
                                <Input />
                            </InputField>
                            <button className="btn btn-primary w-100">Submit</button>
                        </Form>
                    </FormWrapper>
                </div>
            </section>
        </>
    )
}