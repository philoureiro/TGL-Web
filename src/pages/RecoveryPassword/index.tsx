import React, { useCallback, useState } from 'react';
import {
  Container, BoxTypeOfCard, TextTypeOfCard, TextInput,
  ButtonRecoveryPassword, ButtonLogin, BoxIcon
} from './styles';
import CardInput from '../../components/CardInput';
import BoxLogoTheGreatestApp from '../../components/BoxLogoTheGreatestApp';
import CopyrightBar from '../../components/CopyrightBar';
import BoxInput from '../../components/BoxInput';
import * as Icon from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';


interface RecoveryPasswordProps {

}

const RecoveryPassword: React.FC<RecoveryPasswordProps> = () => {

  const [textEmail, setTextEmail] = useState('');

  let schema = Yup.object().shape({
    email: Yup.string().email().required(),
  });

  const handleClickButtonRecovery = useCallback(() => {
    try {
      schema.isValid({
        email: textEmail,
      }).then(function (valid) {
        if (!valid) {
          window.alert('Email com formato incorreto! verifique novamente os campos.');
        } else {
          window.alert('Email enviado com sucesso!');
          history.push('/');
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, [textEmail]);

  const history = useHistory();
  return (
    <>
      <Container>
        <BoxLogoTheGreatestApp />

        <BoxTypeOfCard>
          <TextTypeOfCard>Reset password</TextTypeOfCard>
          <CardInput>
            <BoxInput label={'Email:'}>
              <TextInput onChange={text => setTextEmail(text.target.value)} type={'text'}></TextInput>
            </BoxInput>
            <ButtonLogin onClick={() => { handleClickButtonRecovery() }}>
              Send link
              <BoxIcon>
                <Icon.FaArrowRight size={30}></Icon.FaArrowRight>
              </BoxIcon>
            </ButtonLogin>
          </CardInput>
          <ButtonLogin onClick={() => history.goBack()} style={{ color: '#707070' }}>
            <BoxIcon>
              <Icon.FaArrowLeft size={30}></Icon.FaArrowLeft>
            </BoxIcon>
           Back
          </ButtonLogin>
        </BoxTypeOfCard>
      </Container>
      <CopyrightBar />
    </>
  );
};


export default RecoveryPassword;
