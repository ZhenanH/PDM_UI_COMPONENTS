import * as React from "react";
import { Steps, Button, Icon, Menu, Dropdown } from "antd";
import "antd/dist/antd.css";

const Step = Steps.Step;

interface IProps {
  currentStep?: number;
}

const ApprovalStep = (step: number, currentStep: number) => {
  let iconType = "";
  let rotate = 0;
  let title = "";
  switch (step) {
    case 0:
      iconType = "login";
      title = "Internal Review";
      rotate = 90;
      break;
    case 1:
      iconType = "printer";
      title = "Printer Approval";
      break;
    case 2:
      iconType = "safety";
      title = "Brand Review";
      break;
    case 3:
      iconType = "check-circle";
      title = "Ready";
      break;
  }
  if (step === currentStep && currentStep !== 3) {
    iconType = "loading";
    rotate = 0;
  }
  return (
    <Step
      icon={<Icon type={iconType} rotate={rotate} />}
      title={title}
      description={
        step === currentStep ? <Button size="small">Approve</Button> : null
      }
    />
  );
};

const CreativeApprovalDropdown: React.FC<IProps> = (props: IProps) => {
  const approvalSteps = (
    <div style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)", padding: 8 }}>
      <Steps direction="vertical" size="small" current={props.currentStep}>
        {ApprovalStep(0, props.currentStep)}
        {ApprovalStep(1, props.currentStep)}
        {ApprovalStep(2, props.currentStep)}
        {ApprovalStep(3, props.currentStep)}
      </Steps>
    </div>
  );

  return (
    <Dropdown
      overlay={approvalSteps}
      trigger={["click"]}
      style={{ width: 300 }}
    >
      <span style={{ cursor: "pointer" }}>
        Status:{" "}
        {props.currentStep === 3 ? (
          <Icon type="check-circle" />
        ) : (
          <Icon type="stop" />
        )}
      </span>
    </Dropdown>
  );
};

CreativeApprovalDropdown.defaultProps = {
  currentStep: 0
};

export default CreativeApprovalDropdown;
