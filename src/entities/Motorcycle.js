// in posts.js
import React from 'react';
import {
  List as ListAction,
  Edit as EditAction,
  Create as CreateAction,
  Show as ShowAction,

  SimpleShowLayout,
  Datagrid,
  SimpleForm,
  DateField,
  TextField,
  EditButton,
  TextInput,
} from 'admin-on-rest';

import Icon from 'material-ui/svg-icons/action/book';

const List = (props) => (
  <ListAction {...props}>
    <Datagrid>
      <TextField source="ID" />
      <TextField source="brand" />
      <TextField source="model" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <EditButton basePath="/motorcycles" />
    </Datagrid>
  </ListAction>
);

const Title = ({ record }) => {
  return <span>Motorcycle {record ? `"${record.title}"` : ''}</span>;
};

const Form = (props) => (
  <SimpleForm {...props} redirect="show">
    <TextInput source="brand" />
    <TextInput source="model" />
    <TextInput source="year" />
    <TextInput source="category" />
    <TextInput source="cc" />
    <TextInput source="engineType" />
    <TextInput source="power" />
    <TextInput source="torque" />
    <TextInput source="compression" />
    <TextInput source="bore" />
    <TextInput source="stroke" />
    <TextInput source="fuelSystem" />
    <TextInput source="fuelControl" />
    <TextInput source="ignition" />
    <TextInput source="lubrication" />
    <TextInput source="cooling" />
    <TextInput source="gearbox" />
    <TextInput source="transmission" />
    <TextInput source="clutch" />
    <TextInput source="frameType" />
    <TextInput source="frontSuspension" />
    <TextInput source="frontWheelTravel" />
    <TextInput source="fearSuspension" />
    <TextInput source="fearWheelTravel" />
    <TextInput source="frontTyre" />
    <TextInput source="rearTyre" />
    <TextInput source="frontBrakes" />
    <TextInput source="frontBrakesDiameter" />
    <TextInput source="rearBrakes" />
    <TextInput source="rearBrakesDiameter" />
    <TextInput source="dryWeight" />
    <TextInput source="powerWeight" />
    <TextInput source="seatHeight" />
    <TextInput source="overallHeight" />
    <TextInput source="overallLength" />
    <TextInput source="overallWidth" />
    <TextInput source="groundClearence" />
    <TextInput source="wheelbase" />
    <TextInput source="fuelCapacity" />
    <TextInput source="starter" />
  </SimpleForm>
)

export const Show = (props) => (
  <ShowAction {...props}>
    <SimpleShowLayout>
      <TextField source="brand" />
      <TextField source="model" />
      <TextField source="year" />
      <TextField source="category" />
      <TextField source="cc" />
      <TextField source="engineType" />
      <TextField source="power" />
      <TextField source="torque" />
      <TextField source="compression" />
      <TextField source="bore" />
      <TextField source="stroke" />
      <TextField source="fuelSystem" />
      <TextField source="fuelControl" />
      <TextField source="ignition" />
      <TextField source="lubrication" />
      <TextField source="cooling" />
      <TextField source="gearbox" />
      <TextField source="transmission" />
      <TextField source="clutch" />
      <TextField source="frameType" />
      <TextField source="frontSuspension" />
      <TextField source="frontWheelTravel" />
      <TextField source="fearSuspension" />
      <TextField source="fearWheelTravel" />
      <TextField source="frontTyre" />
      <TextField source="rearTyre" />
      <TextField source="frontBrakes" />
      <TextField source="frontBrakesDiameter" />
      <TextField source="rearBrakes" />
      <TextField source="rearBrakesDiameter" />
      <TextField source="dryWeight" />
      <TextField source="powerWeight" />
      <TextField source="seatHeight" />
      <TextField source="overallHeight" />
      <TextField source="overallLength" />
      <TextField source="overallWidth" />
      <TextField source="groundClearence" />
      <TextField source="wheelbase" />
      <TextField source="fuelCapacity" />
      <TextField source="starter" />
    </SimpleShowLayout>
  </ShowAction>
);


const Edit = (props) => (
  <EditAction title={<Title />} {...props}>
    <Form />
  </EditAction>
);

const Create = (props) => (
  <CreateAction title="Create a Motorcycle" {...props}>
    <Form />
  </CreateAction>
);

export default {
  List,
  Edit,
  Create,
  Show,
  Icon,
};
