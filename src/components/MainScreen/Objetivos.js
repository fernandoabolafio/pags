import React from 'react';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Label from 'grommet/components/Label';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Meter from 'grommet/components/Meter';
import Anchor from 'grommet/components/Anchor';
import EditIcon from 'grommet/components/icons/base/Edit';
import DragIcon from 'grommet/components/icons/base/Drag';
import {SortableContainer, SortableElement, SortableHandle} from 'react-sortable-hoc';

const DragHandle = SortableHandle(() => <DragIcon />);


const SortableItem = SortableElement(({objetivo, index, onSelectObjetivo, num}) =>
  <ListItem justify="start" responsive={false}>
    <DragHandle />
    <Label style={{marginLeft: '10px'}} truncate>{objetivo.nome}</Label>
    <Box justify='end' direction='row' responsive={false} flex='grow'>
      <Box margin={{left: 'small'}}>
        <Value value={`${objetivo.acumulado*100}`}
          units='%'
          align='start' />
        <Meter value={`${objetivo.acumulado*100}`}/>
      </Box>
      <Box margin={{left: 'small'}} justify='center'>
        <Anchor onClick={() => onSelectObjetivo(num)} icon={<EditIcon />} />
      </Box>
    </Box>
  </ListItem>
);

const SortableList = SortableContainer(({objetivos, onSelectObjetivo}) =>
    <List>
      {objetivos.map((objetivo, index) => (
        <SortableItem key={`objetivo-${index}`} index={index} num={index} onSelectObjetivo={onSelectObjetivo} objetivo={objetivo} />
      ))}
    </List>
);

const Objetivos = ({onSelectObjetivo, objetivos, onSortEnd}) =>
    <SortableList objetivos={objetivos} onSelectObjetivo={onSelectObjetivo} onSortEnd={onSortEnd} useDragHandle />


export default Objetivos;
