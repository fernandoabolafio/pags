export const colors = {
  darkBlue: '#102027',
  lightGray: '#E1E2E1',
  darkGray: '#333',
  yellow: '#FAA800',
};

export const sectionStyle = {
  padding: '50px 0',
  justifyContent: 'center'
};

export const sectionTitleStyle = {
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: '24px',
  borderBottom: `2px solid ${colors.yellow}`,
  color: colors.darkGray,
};

export const sectionTitleNegativeStyle = {
  ...sectionTitleStyle,
  color: '#FFF',
};
