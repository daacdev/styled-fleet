import openColors from 'open-color';

export const { black, white, ...colors } = openColors;

export const restColors = {
  ...Object.assign(
    {}, ...Object.entries(colors).map(
      ([color, value]) => ({
        [color]: value[6]
      })
    )
  )
};