import React, { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '../components/styled/MainPageStyle';
import { LoadDate, DateWrap, BtnWrap , hoverColor, DetailBtn } from '../components/styled/DetailPageStyle';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, updateItem } from '../redux/modules/ItemSlice';

const DetailPage = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.items.items)
  const navigate = useNavigate()
  const {id} = useParams()
  const storageItem = items.find((item) => String(item.id) === String(id))

  const isEditingRef = useRef(false)
  const [editedValues, setEditedValues] = useState({
    date : storageItem ? storageItem.date : "",
    title : storageItem ? storageItem.title : "",
    content :storageItem ? storageItem.content : "",
    price : storageItem ? storageItem.price : "",
  })

  const handleDelete = () => {
    const confirmDelete = window.confirm('내용을 삭제하겠습니까?')
    if(confirmDelete){
      dispatch(deleteItem(id))
      navigate('/')
    }
  }

  const handleEdit = () => {
    isEditingRef.current = !isEditingRef.current
    setEditedValues({
      date : storageItem.date,
      title : storageItem.title,
      content : storageItem.content,
      price : storageItem.price
    })
  }

  const handleSave = () => {
    dispatch(updateItem({ id, ...editedValues}))
    isEditingRef.current = false
    navigate('/')
    alert("수정이 완료되었습니다")
  }

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
