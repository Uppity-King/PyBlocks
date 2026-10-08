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

workspace.addChangeListener((e) => {
  if (e.type == 'move' && !e.isUiChange && !e.reason) {
    const b = workspace.getBlocklyById(e.blockId);
    if (b && b.getRootBlock().type != 'program_start') b.dispose(false);
  }
});
