import React, {useState, useContext, useEffect, useCallback} from 'react';
import { MdFilterList } from "react-icons/md";
import { FormattedMessage } from 'react-intl';
import get from 'lodash/get';
import SearchContext from '../../../SearchContext';
import {Button, Row, Col, DataTable, Th, Td, TBody, DetailsDrawer} from '../../../../components';
import {ResultsHeader } from '../../../ResultsHeader';
import {useDialogState} from "reakit/Dialog";
import {useUpdateEffect} from "react-use";
import {EventSidebar} from "../../../../entities/EventSidebar/EventSidebar";
import env from '../../../../../.env.json';

const fallbackTableConfig = {
  columns: [{
    trKey: 'Not specified',
    value: {
      key: 'key',
      labelHandle: 'key'
    }
  }]
};

export const EventsTable = ({ first, prev, next, size, from, results, total, loading, defaultTableConfig = fallbackTableConfig, hideLock }) => {

  const { filters, tableConfig = defaultTableConfig, labelMap } = useContext(SearchContext);
  const [fixedColumn, setFixed] = useState(true && !hideLock);
  const fixed = fixedColumn;
  const EVENT_SEARCH_URL = env.EVENT_SEARCH_URL;

  const [activeEventID, setActiveEventID] = useState(false);
  const [activeDatasetKey, setActiveDatasetKey] = useState(false);
  const dialog = useDialogState({ animated: true, modal: false });
  const items = results || [];

  useEffect(() => {
    if (activeEventID && activeDatasetKey) {
      dialog.show();
    } else {
      dialog.hide();
    }
  }, [activeEventID, activeDatasetKey]);

  useUpdateEffect(() => {
    if (!dialog.visible) {
      setActiveEventID(null);
      setActiveDatasetKey(null);
    }
  }, [dialog.visible]);

  const nextItem = useCallback(() => {
    const activeIndex = items.findIndex(x => x.eventId === activeEventID);
    const next = Math.min(items.length - 1, activeIndex + 1);
    if (items[next]) {
      setActiveEventID(items[next].eventId);
      setActiveDatasetKey(items[next].datasetKey);
    }
  }, [activeEventID, activeDatasetKey, items]);

  const previousItem = useCallback(() => {
    const activeIndex = items.findIndex(x => x.key === activeEventID);
    const prev = Math.max(0, activeIndex - 1);
    if (items[prev]) {
      setActiveEventID(items[prev].eventId);
      setActiveDatasetKey(items[prev].datasetKey);
    }
  }, [activeEventID, activeDatasetKey, items]);

  const headers = tableConfig.columns.map((col, index) => {
    const FilterPopover = col.filterKey ? filters[col.filterKey]?.Popover : null;
    return <Th key={col.trKey} width={col.width} >
      <Row wrap="nowrap">
        <Col grow={false} style={{ whiteSpace: 'nowrap' }}><FormattedMessage id={col.trKey} /></Col>
        {FilterPopover && <Col>
          <FilterPopover modal placement="auto">
            <Button appearance="text" style={{ display: 'flex' }}>
              <MdFilterList />
            </Button>
          </FilterPopover>
        </Col>}
      </Row>
    </Th>
  });

  return<>
    {dialog.visible && <DetailsDrawer href={`${EVENT_SEARCH_URL}${activeEventID}`}
                                      dialog={dialog} nextItem={nextItem} previousItem={previousItem}>
      <EventSidebar eventId={activeEventID} datasetKey={activeDatasetKey} defaultTab='details' style={{ maxWidth: '100%', width: 700, height: '100%' }} onCloseRequest={() => dialog.setVisible(false)} />
    </DetailsDrawer>}
  <div style={{
    flex: "1 1 100%",
    display: "flex",
    height: "100%",
    maxHeight: "100vh",
    flexDirection: "column",
  }}>
    <ResultsHeader loading={loading} total={total} />
    <DataTable fixedColumn={fixed} {...{ first, prev, next, size, from, total, loading }} style={{ flex: "1 1 auto", height: 100, display: 'flex', flexDirection: 'column' }}>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <TBody rowCount={size} columnCount={7} loading={loading}>
        {getRows({ tableConfig, labelMap, results, setActiveEventID, setActiveDatasetKey, dialog })}
      </TBody>
    </DataTable>
  </div>
  </>
}

const getRows = ({ tableConfig, labelMap, results = [], setActiveEventID, setActiveDatasetKey, dialog }) => {
  const rows = results.map((row, index) => {
    const cells = tableConfig.columns.map(
      (field, i) => {
        const val = get(row, field.value.key);
        let formattedVal = val;

        if (!val && field.value.hideFalsy === true) {
          formattedVal = '';
        } else if (field.value.formatter) {
          formattedVal = field.value.formatter(val, row);
        } else if (field.value.labelHandle) {
          const Label = labelMap[field.value.labelHandle];
          formattedVal = Label ? <Label id={val} /> : val;
        }

        return <Td noWrap={field.noWrap} key={field.trKey} style={field.value.rightAlign ? {textAlign: 'right'} : {}}>{formattedVal}</Td>;
      }
    );
    return <tr key={row.key} onClick={() => { setActiveEventID(row.eventId); setActiveDatasetKey(row.datasetKey); }}>{cells}</tr>;
  });
  return rows;
}