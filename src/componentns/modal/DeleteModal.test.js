
import { render,screen,fireEvent} from "@testing-library/react";
import DeleteModal from './deletemodal'
import { Provider } from "react-redux";
import store from '../../store/'
import { useDispatch,useSelector } from "react-redux";
import { openDeleteModalAC,closeDeleteModalAC } from "../../store/modal/actionCreators";

const Component =() =>{
    return (
    <Provider store ={store}>
        <DeleteModal/>
    </Provider>
)}
describe('DeleteModal renders',()=>{

test('should DeleteModal match snapshot',()=>{
const {asFragment } = render(<Component/>)
expect(asFragment()).toMatchSnapshot()

})

})
const SecondComponent = () => {
    const dispatch = useDispatch();
    const deleteModal = useSelector(store =>store.modal.deleteModalvalue)
    return (
        <>
            <button onClick={()=>{dispatch(openDeleteModalAC())}}
            >OPEN</button>
  { deleteModal &&
        <DeleteModal  />}
 <button onClick={()=>{dispatch(closeDeleteModalAC())}}
            >CLOSE</button>     
        </>
    )
}

const MockedProvider = ({ children }) => (
    <Provider store={store}>
            <SecondComponent />
    </Provider>
)


describe('DeleteModal open on state chnages', () => {
    test('should DeleteModal open on background click', () => {
      render(<MockedProvider />);

        fireEvent.click(screen.getByText('OPEN'));
   

        expect(screen.queryByTestId('closemodal')).toBeInTheDocument();

    });
    test('should Modal open on background click', () => {
        render(<MockedProvider />);
  
          fireEvent.click(screen.getByText('CLOSE'));
     
  
          expect(screen.queryByTestId('closemodal')).not.toBeInTheDocument();
  
      }); 
})
