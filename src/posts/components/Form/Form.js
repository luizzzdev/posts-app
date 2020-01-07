import React, { useState } from 'react';
import Aux from '../../../shared/components/UI/Aux/Aux';
import Input from '../../../shared/components/UI/Input/input';
import Button from '../../../shared/components/UI/Button/button';
import FlexWrapper from '../../../shared/components/UI/FlexWrapper/flex-wrapper';

const PostsForm = ({ post, onSubmit }) => {
  const [newPost, setNewPost] = useState({ title: '', text: '' });

  const titleHandler = e => {
    const value = e.target.value;
    setNewPost(prevState => ({ ...prevState, title: value }));
  }

  const textHandler = e => {
    const value = e.target.value;
    setNewPost(prevState => ({ ...prevState, text: value }));
  };

  const submit = () => onSubmit(newPost);

  return (
    <Aux>
      <Input placeholder="Digite o titulo aqui" onInput={titleHandler} />
      <Input
        inputtype="textarea"
        rows="5"
        placeholder="Digite o conteudo do post aqui"
        onInput={textHandler}
      />
      <FlexWrapper justifyContent="flex-end">
        <Button onClick={submit}>Salvar</Button>
      </FlexWrapper>
    </Aux>
  );
};

export default PostsForm;
