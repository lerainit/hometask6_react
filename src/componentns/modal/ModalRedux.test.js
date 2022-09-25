import modalReducer from "../../store/modal/reducer";
import { openModal } from "../../store/modal/actions";
import { openDeleteModal } from "../../store/modal/actions";
import { closeModal } from "../../store/modal/actions";
import { closeDeleteModal } from "../../store/modal/actions";
import { render,screen,fireEvent } from "@testing-library/react";
import Modal from './modal'
import { Provider } from "react-redux";
import store from '../../store/'

const Component =() =>{
    return (
    <Provider store ={store}>
        <Modal/>
    </Provider>
)}
describe('Modal renders',()=>{

test('should Modal match snapshot',()=>{
const {asFragment } = render(<Component/>)
expect(asFragment()).toMatchSnapshot()

})

})




const initialState = {
    
    value: false,
    deleteModalvalue:false,
  

}


describe('Modal reducer works',()=>{

test('should return the initial state',()=>{
expect(modalReducer(undefined,{type:undefined})).toEqual(initialState)


})
test('should change value',()=>{
expect(modalReducer(initialState,{type: openModal})).toEqual({
    
        value: true,
        deleteModalvalue:false,
      

    })
    expect(modalReducer(initialState,{type: closeModal})).toEqual({
    
        value: false,
        deleteModalvalue:false,
      

    })
     

})
test('should change deleteModalvalue',()=>{
    expect(modalReducer(initialState,{type: openDeleteModal})).toEqual({
        
            value: false,
            deleteModalvalue:true,
          
    
        })
        expect(modalReducer(initialState,{type: closeDeleteModal})).toEqual({
        
            value: false,
            deleteModalvalue:false,
          
    
        })    
    
    })
})