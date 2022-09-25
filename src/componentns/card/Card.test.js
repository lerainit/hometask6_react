import { render,} from "@testing-library/react";
import Card from './productCard'
import { Provider } from "react-redux";
import store from '../../store/'

const Component =() =>{
    return (
    <Provider store ={store}>
        <Card/>
    </Provider>
)}
describe('Modal renders',()=>{

test('should Modal match snapshot',()=>{
const {asFragment } = render(<Component/>)
expect(asFragment()).toMatchSnapshot()

})

})