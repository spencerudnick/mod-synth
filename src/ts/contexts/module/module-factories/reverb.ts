import { ModuleProps } from '../components/module';
import { IoType } from '../components/io-interface';
import { guid } from '../utils/guid';
import { SynthKitchenContext } from '../audio-context';

export const createReverb = (node = SynthKitchenContext.createConvolver()): ModuleProps => {
  return {
    node,
    guid: guid(),
    inputs: [{
      guid: guid(),
      name: 'input',
      type: IoType.Input,
      target: node,
    }],
    outputs: [{
      guid: guid(),
      name: 'output',
      type: IoType.Output,
      target: node,
    }],
    mods: [{
      guid: guid(),
      name: 'gain',
      type: IoType.Mod,
      target: node,
      accessor: 'gain',
    }],
    params: [{
      guid: guid(),
      name: 'buffer',
      type: IoType.Param,
      target: node,
      accessor: 'buffer',
      options: []
    }, {
      guid: guid(),
      name: 'normalize',
      type: IoType.Param,
      target: node,
      accessor: 'normalize',
      options: [
        'true',
        'false'
      ]
    }]
  }
}