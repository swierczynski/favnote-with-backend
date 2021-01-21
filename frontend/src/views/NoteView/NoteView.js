import React, { useContext, useEffect } from 'react';
import UserPageTemplate from '../../templates/UserPageTemplate';
import Card from '../../components/moleculs/Card/Card'
import styles from './NoteView.module.scss'
import Input from '../../components/atoms/Input/Input';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import Heading from '../../components/atoms/Heading/Heading';
import { connect } from 'react-redux'
import AddItem from '../../components/organisms/AddItem/AddItem';
import { fetchItems } from '../../store/actions'

const NoteView = ({notes, fetchNotes}) => {

  const allNotes = notes && notes.map( note => <Card key={note._id} {...note} /> )

  const connect = () => fetchNotes()


  useEffect(()=> {
    connect()
  }, [notes])

  return ( 
    <UserPageTemplate>
      <div className={styles.heading}>
        <Input searchInput />
        <Heading big >Notes</Heading>
        <Paragraph>6 notes</Paragraph>
      </div>
      <div className={styles.main}>
        {allNotes}
      </div>
      <AddItem />
    </UserPageTemplate>
   );
}
 
const mapStateToProps = (state) => {
  return {
    notes : state.notes
  }
}
const mapDispatchToProps = dispatch => ({
  fetchNotes: ()=> dispatch(fetchItems('notes'))
})

const NoteViewConsumer = connect(mapStateToProps, mapDispatchToProps)(NoteView)


export default NoteViewConsumer;