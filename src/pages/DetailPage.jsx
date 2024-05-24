import React, { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from './MainPage';

const LoadDate = styled.input`
  width: 800px;
  padding: 10px 15px;
  font-size: 18px;
  margin: 5px auto;
  border: none;
  border-radius: 10px;
`;

const DateWrap = styled.div`
  margin: 20px;
`;

const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  float: right;
  margin-right: 30px;
`;

const hoverColor = ['#4b9ed9', '#cc4242', '#b0b1b5'];

const DetailBtn = styled.button`
  width: 70px;
  height: 40px;
  border: none;
  background-color: ${props => props.$backgroundColor};
  border-radius: 10px;
  margin: 0px 5px;
  color: white;
  &:hover {
    background-color: ${props => props.$hoverColor};
  }
`;

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const storageData = localStorage.getItem('items');
  const storageItems = JSON.parse(storageData);
  const storageItem = storageItems.find(item => String(item.id) === id);
  
  const isEditingRef = useRef(false);
  const [editedValues, setEditedValues] = useState({
    date: storageItem ? storageItem.date : '',
    title: storageItem ? storageItem.title : '',
    content: storageItem ? storageItem.content : '',
    price: storageItem ? storageItem.price : '',
  });

  const handleDelete = () => {
    const confirmDelete = window.confirm('내용을 삭제 할까요?');
    if (confirmDelete) {
      const deleteItems = storageItems.filter(item => String(item.id) !== id);
      localStorage.setItem('items', JSON.stringify(deleteItems));
      navigate('/');
    }
  };

  const handleEdit = () => {
    isEditingRef.current = true;
    setEditedValues({
      date: storageItem.date,
      title: storageItem.title,
      content: storageItem.content,
      price: storageItem.price,
    });
  };
  
  const handleSave = () => {
    const updatedItems = storageItems.map(item => {
      if (String(item.id) === id) {
        return {
          ...item,
          date: editedValues.date,
          title: editedValues.title,
          content: editedValues.content,
          price: editedValues.price,
        };
      }
      return item;
    });
    localStorage.setItem('items', JSON.stringify(updatedItems));
    isEditingRef.current = false;
    setEditedValues({
      date: editedValues.date,
      title: editedValues.title,
      content: editedValues.content,
      price: editedValues.price,
    });
    navigate('/');
    alert("수정이 완료되었습니다.");
  };
  

  return (
    <Layout>
      {storageItem ? (
        <div>
          <DateWrap>
            <p>날짜</p>
            <LoadDate
              type='date'
              value={isEditingRef.current ? editedValues.date : storageItem.date}
              onChange={e => setEditedValues({ ...editedValues, date: e.target.value })}
              readOnly={!isEditingRef.current}
            />
          </DateWrap>
          <DateWrap>
            <p>제목</p>
            <LoadDate
              type='text'
              value={isEditingRef.current ? editedValues.title : storageItem.title}
              onChange={e => setEditedValues({ ...editedValues, title: e.target.value })}
              readOnly={!isEditingRef.current}
            />
          </DateWrap>
          <DateWrap>
            <p>내용</p>
            <LoadDate
              type='text'
              value={isEditingRef.current ? editedValues.content : storageItem.content}
              onChange={e => setEditedValues({ ...editedValues, content: e.target.value })}
              readOnly={!isEditingRef.current}
            />
          </DateWrap>
          <DateWrap>
            <p>가격</p>
            <LoadDate
              type='number'
              value={isEditingRef.current ? editedValues.price : storageItem.price}
              onChange={e => setEditedValues({ ...editedValues, price: e.target.value })}
              readOnly={!isEditingRef.current}
            />
          </DateWrap>
          <BtnWrap>
            {isEditingRef.current ? (
              <DetailBtn
                $backgroundColor="#5BBCFF"
                $hoverColor={hoverColor[0]}
                onClick={handleSave}
              >
                저장
              </DetailBtn>
            ) : (
              <DetailBtn
                $backgroundColor="#5BBCFF"
                $hoverColor={hoverColor[0]}
                onClick={handleEdit}
              >
                수정
              </DetailBtn>
            )}
            <DetailBtn $backgroundColor="#EE4E4E" $hoverColor={hoverColor[1]} onClick={handleDelete}>
              삭제
            </DetailBtn>
            <DetailBtn
              $backgroundColor="#C7C8CC"
              $hoverColor={hoverColor[2]}
              onClick={() => {
                navigate('/');
              }}
            >
              뒤로가기
            </DetailBtn>
          </BtnWrap>
        </div>
      ) : (
        <p>없음</p>
      )}
    </Layout>
  );
};

export default DetailPage;
