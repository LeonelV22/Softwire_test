import Head from 'next/head'
import {useUploadFile} from "./hooks";
import {useState} from "react";

const ListItem = ({ item }) => (<li>{item}</li>)
export default function Home() {

    const [errors, setErrors] = useState([])

    const handleUpload = async () => {
        const data = new FormData()
        data.append('file', document.querySelector('input[name="bookingFile"]').files[0])

        const errors = await useUploadFile(data)
        if (errors.ok){
            let json = await errors.json()
            setErrors(json.data)
        }
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Leonel Viera Handpicked test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
              Leonel Viera Handpicked test
          </h1>

          <div className="overflow-hidden relative w-64 mt-4 mb-4">
              <input type="file"
                     accept=".txt"
                     name="bookingFile" multiple />
          </div>
          <div className="overflow-hidden relative w-64 mt-4 mb-4">
              <button onClick={handleUpload}
                  className="bg-indigo-500 hover:bg-indigo-dark text-white font-bold py-2 px-4 w-full inline-flex items-center">
                  <svg fill="#FFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0z" fill="none"/>
                      <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
                  </svg>
                  <span className="ml-2">Send file</span>
              </button>
          </div>

          <div>
              <ul className="list-disc list-outside text-left">
                  { errors.map((x, idx) => <ListItem key={idx} item={x} />) }
              </ul>
          </div>
      </main>
    </div>
  )
}
