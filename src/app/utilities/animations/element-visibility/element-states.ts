import { ElementChangingVisibility } from './element-changing-visibility';

export class HiddenElement implements ElementChangingVisibility {
  readonly visibleness = 'hidden';

  toggle() {
    return new ShownElement();
  }
}

export class ShownElement implements ElementChangingVisibility {
  readonly visibleness = 'shown';

  toggle() {
    return new HiddenElement();
  }
}
