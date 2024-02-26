// Imports
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Title = styled.h1`
  text-align: center;
  margin: 4vh 0;
`;

const FormWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const ButtonAlign = styled.div`
  text-align: center;
`;

// Componente Header
function Form() {
  // Use useRef para criar refs
  const nameRef = useRef(null);
  const motherNameRef = useRef(null);
  const choiceRef = useRef(null);
  const dateRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const marcaRef = useRef(null);
  const modelRef = useRef(null);
  const anoRef = useRef(null);
  const placaRef = useRef(null);
  const creditoRef = useRef(null);

  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    motherName: '',
    date: '',
    choice: '',
    phoneNumber: '',
    marca: '',
    model: '',
    ano: '',
    placa: '',
    credito: '',
  });

  // Função para lidar com a mudança nos inputs do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página ao enviar o formulário
    // Aqui você pode adicionar a lógica para lidar com os dados do formulário
    console.log('Dados do formulário:', formData);
    gotowhatsapp(formData); 
  };

  // Função para redirecionar para o WhatsApp
  function gotowhatsapp(formData) {
    var name = formData.name;
    var motherName = formData.motherName;
    var choice = formData.choice;
    var date = formData.date;
    var phoneNumber = formData.phoneNumber;
    var marca = formData.marca;  // Corrigido de "marcaRef" para "marca"
    var model = formData.model;  // Corrigido de "modelRef" para "model"
    var ano = formData.ano;      // Corrigido de "anoRef" para "ano"
    var placa = formData.placa;  // Corrigido de "placaRef" para "placa"
    var credito = formData.credito;  // Corrigido de "creditoRef" para "credito"

    var url =
      "https://wa.me/11947946525?text=" +
      "Nome: " +
      name +
      ",%0a" +
      "Nome da mãe: " +
      motherName +
      ",%0a" +
      "Possui CNH: " +
      choice +
      ",%0a" +
      "Data de Nascimento: " +
      date +
      ",%0a" +  
      "Número: " +
      phoneNumber +
      ",%0a" +  
      "Marca do veículo: " +
      marca +
      ",%0a" +  
      "Modelo: " +
      model +
      ",%0a" +  
      "Ano: " +
      ano +
      ",%0a" +  
      "Placa: " +
      placa +
      ",%0a" +  
      "Crédito: " +
      credito;

    window.open(url, "_blank").focus();
  }

  return (
    <>
      <Title>Dados Pessoais:</Title>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <FormGroup className="mb-3">
            <Label htmlFor="name">Nome Completo:</Label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Digite seu nome completo..."
              value={formData.name}
              onChange={handleInputChange}
              ref={nameRef}
              required
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Label htmlFor="motherName">Nome da Mãe:</Label>
            <input
              type="text"
              id="motherName"
              name="motherName"
              className="form-control"
              placeholder="Digite o nome completo da sua mãe..."
              value={formData.motherName}
              onChange={handleInputChange}
              ref={motherNameRef}
              required
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Label htmlFor="choice">Possui CNH:</Label>
            <select
              id="choice"
              name="choice"
              className="form-select"
              placeholder="Escolha entre Sim e Não..."
              value={formData.choice}
              onChange={handleInputChange}
              ref={choiceRef}
              required
            >
              <option value="" disabled hidden>Selecione...</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </FormGroup>

          <FormGroup className="mb-3">
            <Label htmlFor="date">Data de Nascimento:</Label>
            <InputMask
              mask="99/99/9999"
              maskChar="_"
              id="date"
              name="date"
              className="form-control"
              placeholder="dd/mm/aaaa"
              value={formData.date}
              onChange={(e) => {
                const enteredDate = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                const formattedDate = enteredDate.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
                handleInputChange({ target: { name: 'date', value: formattedDate } });
              }}
              required
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Label htmlFor="phoneNumber">Número de Celular (com DDD):</Label>
            <InputMask
              mask="(99) 99999-9999"
              maskChar="_"
              id="phoneNumber"
              name="phoneNumber"
              className="form-control"
              placeholder="Digite seu número de celular..."
              value={formData.phoneNumber}
              onChange={handleInputChange}
              ref={phoneNumberRef}
              required
            />
          </FormGroup>

          <Title>Dados do Veículo:</Title>

          <FormGroup className="mb-3">
            <Label htmlFor="marca">Marca:</Label>
            <input
              type="text"
              id="marca"
              name="marca"
              className="form-control"
              placeholder="Digite a marca do veículo"
              value={formData.marca}
              onChange={handleInputChange}
              ref={marcaRef}
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Label htmlFor="model">Modelo:</Label>
            <input
              type="text"
              id="model"
              name="model"
              className="form-control"
              placeholder="Digite o modelo do veículo"
              value={formData.model}
              onChange={handleInputChange}
              ref={modelRef}
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Label htmlFor="ano">Ano do Veículo:</Label>
            <input
              id="ano"
              name="ano"
              className="form-control"
              placeholder="Digite o ano do veículo"
              value={formData.ano}
              onChange={handleInputChange}
              onInput={(event) => event.target.value = event.target.value.replace(/[^0-9]/g, '')}
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Label htmlFor="placa">Placa do veículo:</Label>
            <input
              type="text"
              id="placa"
              name="placa"
              className="form-control"
              placeholder="Digite a placa do veículo"
              value={formData.placa}
              onChange={handleInputChange}
              ref={placaRef}
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Label htmlFor="credito">Valor do crédito:</Label>
            <InputMask
              mask="R$ 99999999999"
              maskChar=""
              id="credito"
              name="credito"
              className="form-control"
              placeholder="Digite o valor do crédito"
              value={formData.credito}
              onChange={handleInputChange}
              ref={creditoRef}
            />
          </FormGroup>

          <ButtonAlign>
            <div className="mb-2">
              <Button type="submit" variant="danger" size="lg">
                Enviar Formulário
              </Button>{' '}
            </div>
          </ButtonAlign>
        </form>
      </FormWrapper>
    </>
  );
}

export default Form;
