
import { render,} from "@testing-library/react";
import DeleteModal from './deletemodal'
import { Provider } from "react-redux";
import store from '../../store/'

const Component =() =>{
    return (
    <Provider store ={store}>
        <DeleteModal/>
    </Provider>
)}
describe('Modal renders',()=>{

test('should Modal match snapshot',()=>{
const {asFragment } = render(<Component/>)
expect(asFragment()).toMatchSnapshot()

})

})
