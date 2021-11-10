import React  from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'; 



const Coupon = () => {
	

/* 	useEffect(() => { 

		async function openQuestions(){
            await Api.post(`/conferePergunta`,{
                idCampanha : 1 ,
            }).then(response => {
                setQuestions(response.data);
                setShowAnswer(false)
				setLoader(false);
            })
        }

		loadQuestions();
		
	}, []) */
	
	
	return  (
		<div className="content">
  			 <Header />
            <div className='score-section'>
                cupom 12
            </div>
			<Footer />
		</div>
	);
}
export default Coupon;