import React from "react";
import { shallow } from "enzyme";
import Task from "../Task/Task";

describe("Testing the task component", () => {
  const taskProps = {
    endDate: new Date("10-06-2020").getFullYear(),
    description: "Testing",
  };
  let wrapper;
  beforeEach(()=>{
     wrapper = shallow(<Task {...taskProps} />);

  })
  it("Test the checkbox Component in task Component", () => {
    
    expect(wrapper.find("CheckBoxComponent").props().size).toEqual("small");
    expect(wrapper).toMatchSnapshot();
  });
  it("Test the typoraphy Component in task Component", () => {
    expect(wrapper.find('#description').props().children).toEqual("Testing");
  });
  it("Test the Chip Component in task Component", () => {
    expect(wrapper.find('ChipComponent').props().label).toEqual( "Jan 1,  5:30 AM");
  });
});

