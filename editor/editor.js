const toolboxConfiguration = {
  'kind': 'flyoutToolbox',
  'contents': [
    { 'kind': 'block', 'type': 'controls_if' }
  ]
};

const workspace = Blockly.inject('blocklyDiv', {
  toolbox: toolboxConfiguration,
  grid: {
    spacing: 20,
    length: 3,
    colour: '#ccc',
    snap: true
  },
  trashcan: true
});
