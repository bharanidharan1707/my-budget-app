export default function HeaderTotal({totalExp}) {
    return (
        <div>
          <label id="lbl_totalexp" value={totalExp}><span>Your total expense as of now : {totalExp}</span></label> 
        </div>
      );
  }