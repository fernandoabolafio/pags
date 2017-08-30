import React from 'react';
import Layer from '../Layer';
import Pags from '../Pags'
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import acessorio00 from '../../assets/acessorio00.png';
import acessorio01 from '../../assets/acessorio01.png';
import acessorio02 from '../../assets/acessorio02.png';
import acessorio03 from '../../assets/acessorio03.png';
import acessorio04 from '../../assets/acessorio04.png';
import acessorio05 from '../../assets/acessorio05.png';
import acessorio06 from '../../assets/acessorio06.png';
import acessorio07 from '../../assets/acessorio07.png';
import acessorio08 from '../../assets/acessorio08.png';
import acessorio09 from '../../assets/acessorio09.png';
import acessorio10 from '../../assets/acessorio10.png';

const acessoriosSrc = {
  [0]: acessorio00,
  [1]: acessorio01,
  [2]: acessorio02,
  [3]: acessorio03,
  [4]: acessorio04,
  [5]: acessorio05,
  [6]: acessorio06,
  [7]: acessorio07,
  [8]: acessorio08,
  [9]: acessorio09,
  [10]: acessorio10
}

const BadgeLayer = ({onClose, recompensa, small}) =>
  <Layer onClose={onClose}>
    <Section>
      <Heading tag='h3'>Nova Recompensa!</Heading>
      <Box>
        Você {recompensa.motivo} e liberou um novo acessório para seu Pag$!
        <Box>
          <Pags src={acessoriosSrc[recompensa.acessorioId]} size={small ? 'small' : 'medium'}/>
        </Box>
        <Box direction='row' responsive={false} justify='between'>
          <Button path='app/inventario' label='Ver Inventário' />
          <Button onClick={onClose} label='Compartilhar' />
          <Button onClick={onClose} label='Continuar' />
        </Box>
      </Box>
    </Section>
  </Layer>

export default BadgeLayer;
