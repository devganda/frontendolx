import React from 'react';
import { PageArea, Fake } from './styled';
import { useParams } from 'react-router-dom';
import { PageContainer } from '../../components/MainComponents';
import { useState, useEffect } from 'react';
import useApi from '../../helpers/api';

const Page = () => {

    const formatDate = (date) =>{
        let cDate = new Date(date);

        let months = ['Janeiro','Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

        let cDay = cDate.getDate();
        let cMonths = cDate.getMonth();
        let cYear = cDate.getFullYear();

        return `${cDay} de ${months[cMonths]} de ${cYear}`;
    }

    const api = useApi();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({});

    useEffect(()=>{
        const getAdInfo = async (id) => {
            const json = await api.getAd(id, true);
            setAdInfo(json);
            setLoading(false);
        }
        getAdInfo(id);
    },[]);

    return(
        <PageContainer>
            <PageArea>
               <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                            {loading && <Fake height={300}/>}
                        </div>
                        <div className="adInfor">
                            <div className="adName">
                               {loading && <Fake height={30}/>}
                               {adInfo.title && 
                                <h2>{adInfo.title}</h2>
                               }
                               {adInfo.dateCreated && 
                                <small>Criado em {formatDate(adInfo.dateCreated)}</small>
                               }
                            </div>
                            <div className="adDescription">
                                {loading && <Fake height={100}/>}
                                {adInfo.description}
                                <hr/>
                                {adInfo.views &&
                                    <small>Visualizações: {adInfo.views}</small>
                                }
                            </div>
                        </div>
                    </div>
               </div>
               <div className="rightSide">
                <div className="box box--padding">
                    {loading && <Fake height={20}/>}
                </div>
                <div className="box box--padding">
                    {loading && <Fake height={50}/>}
                </div>
               </div>
            </PageArea>
        </PageContainer> 
    );
}

export default Page;