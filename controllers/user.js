const User = require("../model/user");
const Revenue = require("../model/revenue");

const month = (a)=>{
  
  switch(a){
    case 0: b = "January";
        break;
    case 1: b = "February";
        break;
    case 2: b = "March";
        break;
    case 3: b = "April";
        break;
    case 4: b = "May";
        break;
    case 5: b = "June"; 
        break;
    case 6: b = "July";
        break;
    case 7: b = "August";
        break;
    case 8: b = "September";
        break;
    case 9: b = "October";
        break;
    case 10: b = "November";
        break;
    case 11: b = "December";
        break;
    }
    return b;
}

exports.postUser=async (req, res, next)=>{
  try {
    const name=req.body.name;
    const email=req.body.email;
    const userData=await new  User({
      name:name,
      email:email
    }).save();
    res.json({
      data:userData
    })
  } catch (error) {
    res.json({
      error:error.message
    })
  }

}

exports.GetAllUser = async (req,res,next) =>{
  try {
    const AllUser = await User.find({});
    res.json({
      data:AllUser
    })
  } catch (error) {
    res.json({})
  }
};

exports.postRevenue=async (req, res, next)=>{
  try {
    const UserID = req.query.UserID;
    const amount=req.body.amount;
    const dataRecieved=new Date().getMonth()
    const no=parseInt(dataRecieved);
    const RevenueData =await new  Revenue({
      UserID:UserID,
      amount:amount,
      dataRecieved:no
    }).save();
    res.json({
        amount:RevenueData.amount,
        month:RevenueData.dataRecieved
    })
  } catch (error) {
    res.json({
      error:error.message
    })
  }
}

exports.pastRevenueRecievedByMonth = async (req, res, next) => {
  try {
    const UserID = req.query.UserID;
    const totalRevenue= await Revenue.find({UserID:UserID});
    let totalAmount=0;
    let data={};
    for (let j=0;j<12;j++){
      for(let i=0;i<totalRevenue.length;i++){
        console.log(totalRevenue[i].dataRecieved ==j );
        if(totalRevenue[i].dataRecieved == j){
          totalAmount+=totalRevenue[i].amount;
          data['month']=month(j);
          data['totalAmount']=totalAmount
        }
        
      }
    }
    res.json({
      month:data
    })
    
  } catch (error) {
    res.json({
      error:error.message
    })
    
  }
}
  


