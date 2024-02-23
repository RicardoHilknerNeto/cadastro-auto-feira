// Imports
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando o CSS do Bootstrap

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
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);

  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    motherName: '',
    email: '',
    choice: '',
    phoneNumber: '',
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
    gotowhatsapp(formData); // Chama a função gotowhatsapp ao enviar o formulário
  };

  // Função para redirecionar para o WhatsApp
  function gotowhatsapp(formData) {
    var name = formData.name;
    var motherName = formData.motherName;
    var choice = formData.choice;
    var email = formData.email;
    var phoneNumber = formData.phoneNumber;
  
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
      "Email: " +
      email +
      ",%0a" +  // Remova o ponto e vírgula desta linha
      "Número: " +
      phoneNumber;
  
    window.open(url, "_blank").focus();
}


  return (
    <>
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
            >
              <option value="">Selecione...</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </FormGroup>

          <FormGroup className="mb-3">
            <Label htmlFor="email">E-mail:</Label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Digite seu e-mail..."
              value={formData.email}
              onChange={handleInputChange}
              ref={emailRef}
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
