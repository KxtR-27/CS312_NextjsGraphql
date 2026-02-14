/**
 * @jest-environment node
 */

import PageComponentClickCycle from "../../../pages/components/clickCycle"
import { act, create } from "react-test-renderer"

describe("PageComponentClickCycle", () => {
    test("renders correctly", async () => {
        let component: any

        await act(async () => {
            component = create(<PageComponentClickCycle></PageComponentClickCycle>)
        })

        expect(component.toJSON()).toMatchSnapshot()
    })

    test("clicks the cycle button and updates state", async() => {
        let component: any;

        await act(async () => {
            component = create(<PageComponentClickCycle></PageComponentClickCycle>)
            component.root.findByType("button").props.onClick();
        })

        expect(component.toJSON()).toMatchSnapshot();
    })
})