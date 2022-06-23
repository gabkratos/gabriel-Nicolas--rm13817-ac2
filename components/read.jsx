import Head from 'next/head';


//importar as configurações do firebase
import { app, database } from '../services/firebase'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Create from "../components/create"


//definir a coleção
const contato = collection(database, 'contato')

export default function Home() {

  //read
  const [lista, steLista]=useState([])
  const read=()=>{
      getDocs(query(contato,orderBy('nome', 'desc')))
      .then((data)=>{
        steLista(data.docs.map((item)=>{
          return{...item.data(),id:item.id}
        }))
      }
      )
  }
  useEffect(()=>{
    read()
  },[])
  
  return (
    <>
    <Head>
      <title>Crud simples com firebase</title>
    </Head>
    <main className="container">
      <div className="row">
        <div className="col-md">
          <h3 className="text-center">Cadastrar</h3>
          <input 
          type="text" 
          placeholder="Nome" 
          className="form-control" 
          required onChange={event=>SetNome(event.target.value)} 
          value={nome}/>
          <input
          type="email" 
          placeholder="Email" 
          className="form-control" 
          required onChange={event=>SetEmail(event.target.value)} 
          value={email} />
          <input 
          type="tel" 
          placeholder="Telefone" 
          className="form-control" 
          required onChange={event=>SetTelefone(event.target.value)} 
          value={telefone} />
          <textarea 
          placeholder="Mensagem" 
          className="form-control" 
          required onChange={event=>SetMensagem(event.target.value)} 
          value={mensagem}></textarea>
          <input
          type="button" 
          value="Salvar" 
          className="btn btn-outline-dark form-control" 
          onClick={Create} />
          </div>
        <div className="col-md">
          <h3 className="text-center">Exibir</h3>
          {lista.map((lista)=>{
            return(
              <>
              <div className="card">
                <div className="car-header bg-dark text-light">
              Id: {lista.id}
                </div>
                <div className="card-body">
                  <p className="card-title">Nome: {lista.nome}</p>
                  <p className="card-subtitle">Email: {lista.email}</p>
                  <p className="card-subtitle">Telefone: {lista.telefone}</p>
                  <p className="card-subtitle">Mensagem: {lista.mensagem}</p>
                </div>
                <div className="card-footer">
                  <input type="button" value="Alterar" className="btn btn-outline-warning form-control" />
                  <input type="button" value="Excluir" className="btn btn-outline-danger form-control" />
                </div>
              </div>
              {lista.nome}
              </>
            )
          })}
          </div>
      </div>
    </main>
    </>
  )
}