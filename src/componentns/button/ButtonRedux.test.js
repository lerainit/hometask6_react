import Button from "./button";
import{render} from '@testing-library/react'
import { Provider } from "react-redux";
import store from '../../store/'



describe('Button renders', () => {

    test('should Button match snapshot', () => {
        const{asFragment} = render(<Button/>)
        expect(asFragment()).toMatchSnapshot()

    })

})
