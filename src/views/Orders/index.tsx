import { FC, useCallback, useState } from "react";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { NavHeader } from "../../components/NavHeader";
import { Delivery } from "../../types";
import {
  StyledDeliveryItemBox,
  StyledMeta,
  StyledSectionBody,
  StyledSectionBox,
  StyledSectionHeader,
} from "./styled";

export const Orders: FC = (props) => {
  const [delivery] = useState<Delivery>({});

  const onEdit = useCallback(() => {}, []);

  return (
    <div>
      <NavHeader title={"Order Summary"} />

      <OrderSection title={"Delivery Information"}>
        <DeliveryItem data={delivery} onEdit={onEdit} />
      </OrderSection>
    </div>
  );
};

const OrderSection: FC<{ title: string }> = (props) => {
  return (
    <StyledSectionBox>
      <StyledSectionHeader>{props.title}</StyledSectionHeader>
      <StyledSectionBody>{props.children}</StyledSectionBody>
    </StyledSectionBox>
  );
};

const DeliveryItem: FC<{ data: Delivery; onEdit: () => void }> = (props) => {
  return (
    <StyledDeliveryItemBox>
      <Icon name="icon-time" />
      <div className="content">
        <StyledMeta>
          <div className="label">Delivery time:</div>
          <div className="value">10:00 PM - 10:20 PM on 6/10</div>
        </StyledMeta>
      </div>
      <div className="action">
        <Button onClick={props.onEdit}>Edit</Button>
      </div>
    </StyledDeliveryItemBox>
  );
};
