
<App>
  <Info></Info> -> estado llamada from context
  <Display></Display> -> num from context
  <Actions>
        2 * <Action x={}></Action>

   </Actions>
   <Keyboard> 
        11 * <Key z={}></Key> -> cambian num in context
                -> lee estado llamada from context
    </Keyboard>

</App>;





  <Actions> -->  handleCall, handleHang from context
    <Action color={a1} label={} handle={handleCall}></Action>
    <Action x={a2} handle={handleHang}>></Action>
    
  </Actions>;



 <Actions>
   [a1, a2].map(item => <Action x={item}></Action>)
 </Actions>;


isCalling
phoneNumber

 handleCall()
 handleHang() 


usePhone

const [isCalling, setIsCalling] = useState(false)
const [phoneNumber, setPhoneNumber] = useState('')


 handleCall() {
    setIsCalling(true)
 }

  handleHang() {
    setIsCalling(true)
    setPhoneNumber('')
  }

  return {
        isCalling
        phoneNumber
        handleCall
        handleHang

  }


  <div className='phone-key' disabled={isCalling}>
    {key}
  <div/>  
