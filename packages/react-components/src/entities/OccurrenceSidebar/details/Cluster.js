/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useContext, useState, useEffect } from 'react';
import ThemeContext from '../../../style/themes/ThemeContext';
import * as css from '../styles';
import { Row, Col, Image, Properties, IconFeatures } from "../../../components";
import { useQuery } from '../../../dataManagement/api';
import { Header } from './Header';

const { Term: T, Value: V } = Properties;

export function Cluster({
  data,
  loading: keyLoading,
  activeImage, setActiveImage,
  className,
  ...props
}) {
  const theme = useContext(ThemeContext);
  const { data: cluster, error, loading: clusterLoading, load } = useQuery(CLUSTER, { lazyLoad: true });

  useEffect(() => {
    if (typeof data !== 'undefined') {
      load({ variables: { key: data.occurrence.gbifId } });
    }
  }, [data]);

  const related = cluster?.occurrence?.related;
  if (!data || clusterLoading || !related) {
    return <div>Loading</div>;
  }

  return <div style={{ padding: '12px 16px' }}>
    <Header data={data} />
    <main>
      {related.map(x => {
        return <RelatedOccurrence key={x.occurrence.gbifId} related={x.occurrence} reasons={x.reasons} original={data.occurrence}/>
      })}
    </main>
  </div>
};

export function RelatedOccurrence({ original, reasons, related, ...props }) {
  const theme = useContext(ThemeContext);
  return <article style={{border: '1px solid #ddd', marginBottom: 24}}>
    <Row flexWrap="nowrap">
      <Col grow={false} shrink={false}>
        {related?.primaryImage?.identifier && <Image style={{ width: 180, height: 180, display: 'block' }} src={related.primaryImage.identifier} w={180} h={180}/>}
        {!related?.primaryImage?.identifier && related.coordinates && <img style={{ width: 180, height: 180, display: 'block' }} src={`https://api.mapbox.com/styles/v1/mapbox/light-v9/static/pin-s-circle+285A98(${related.coordinates.lon},${related.coordinates.lat})/${related.coordinates.lon},${related.coordinates.lat},8,0/180x180@2x?access_token=pk.eyJ1IjoiaG9mZnQiLCJhIjoiY2llaGNtaGRiMDAxeHNxbThnNDV6MG95OSJ9.p6Dj5S7iN-Mmxic6Z03BEA`} />}
      </Col>
      <Col style={{margin: '12px 24px'}}>
        <h4 style={{margin: 0}} dangerouslySetInnerHTML={{__html: related.gbifClassification.usage.formattedName}}></h4>
        <div css={css.entitySummary({ theme })}>
          <IconFeatures css={css.features({ theme })}
          eventDate={related.eventDateSingle}
          countryCode={related.countryCode}
          locality={related.locality}
          />
          <IconFeatures css={css.features({ theme })}
            stillImageCount={related.stillImageCount}
            movingImageCount={related.movingImageCount}
            soundCount={related.soundCount}
            typeStatus={related.typeStatus}
            basisOfRecord={related.basisOfRecord}
            isSequenced={related.volatile.features.isSequenced}
            isTreament={related.volatile.features.isTreament}
            isClustered={related.volatile.features.isClustered}
            isSamplingEvent={related.volatile.features.isSamplingEvent}
            issueCount={related.issues?.length}
          />
        </div>
        <div>
          <Properties style={{fontSize: 12}}>
            <T>Publisher</T><V>{related.publisherTitle}</V>
            <T>Dataset</T><V>{related.datasetTitle}</V>
          </Properties>
        </div>
      </Col>
    </Row>
  </article>
};

const CLUSTER = `
query occurrence($key: ID!){
  occurrence(key: $key) {
  	related {
      reasons
      occurrence {
        basisOfRecord
        datasetTitle
        publisherTitle
        coordinates
        typeStatus
        soundCount
        stillImageCount
        movingImageCount
        eventDateSingle
        primaryImage {
          identifier
        }
        gbifClassification {
          usage {
            formattedName
          }
        }
        volatile {
          features {
            isSequenced
            isSamplingEvent
            isTreament
          }
        }
      }
    }
  }
}
`;