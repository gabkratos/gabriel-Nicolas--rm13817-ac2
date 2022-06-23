import Head from 'next/head';


//importar as configurações do firebase
import { app, database } from '../services/firebase'
import { collection, addDoc} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Read from "../components/read";


//definir a coleção
const contato = collection(database, 'contato')

export default function Home() {

  //hooks
  const [nome, SetNome]=useState('')
  const [email, SetEmail]=useState('')
  const [telefone,  SetTelefone]=useState('')
  const [mensagem, SetMensagem]=useState('')

  //create 
  const create = ()=>{
    addDoc(contato,{
      nome: nome,
      email: email,
      telefone: telefone,
      mensagem: mensagem
    }).then(()=>{
      SetNome('')
      SetEmail('')
      SetTelefone('')
      SetMensagem('')
      Read()
    })
  }

}