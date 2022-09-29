import Button from "./button";
import{render} from '@testing-library/react'


describe('Button renders', () => {

    test('should Button match snapshot', () => {
        const{asFragment} = render(<Button/>)
        expect(asFragment()).toMatchSnapshot()

    })

})
