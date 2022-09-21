import * as FD from './FieldDescriptor.styles'

export interface FieldDescriptorProps {
  description: string
  value: React.ReactNode
}

// export default function ValueDescriptor (props: FieldDescriptorProps) {
//   return <FD.Wrapper>
//     <span className="Description">{ props.description }:</span>
//     <span className="Value">{ props.value }</span>
//   </FD.Wrapper>
// }

// outra forma de fazer
export default function FieldDescriptor ({ description, value }: FieldDescriptorProps) {
  return <FD.Wrapper>
    <FD.Description>{description}:</FD.Description>
    <FD.Value>{value}</FD.Value>
  </FD.Wrapper>
}