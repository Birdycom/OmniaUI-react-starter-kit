import { PasswordInput as OcPasswordInput } from '@birdycom/omniaui-react';
import type { ComponentProps, Ref } from 'react';

type Props = Omit<ComponentProps<'input'>, 'type'> & { ref?: Ref<HTMLInputElement> };

/** OmniaUI password input: the show/hide button is part of the field (oc-input-reveal). */
export default function PasswordInput(props: Props) {
    return <OcPasswordInput {...(props as ComponentProps<typeof OcPasswordInput>)} />;
}
