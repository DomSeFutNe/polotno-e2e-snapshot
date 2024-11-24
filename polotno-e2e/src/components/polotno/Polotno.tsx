import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import Workspace from "polotno/canvas/workspace";
import { StoreType } from "polotno/model/store";
import { useState } from "react";
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { SidePanel } from 'polotno/side-panel';
import jsonTemplate from './template.json';

type Props = {
    store: StoreType;
}

const Polotno = ({store} : Props) => {
    const [template, setTemplate] = useState<JSON | null>(null);

    const handleLoadTemplate = async () => {
        const temp = JSON.parse(JSON.stringify(jsonTemplate));
        store.loadJSON(temp);
        setTemplate(temp);
    };

  return (    <>
    {!template ? (<button onClick={handleLoadTemplate}>Load Template</button>) :(
    <PolotnoContainer style={{ width: '100vw', height: '100vh' }}>
      <SidePanelWrap>
        <SidePanel store={store} />
      </SidePanelWrap>
      <WorkspaceWrap>
        <Toolbar store={store} downloadButtonEnabled />
        <Workspace store={store} />
        <ZoomButtons store={store} />
      </WorkspaceWrap>
    </PolotnoContainer>)}</>
  )
}

export default Polotno