import React, { useContext, useEffect, useState } from 'react';
import { VscCircleFilled, VscCircle } from 'react-icons/vsc';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { NoteContext } from './NoteContext';
import { IconButton } from '../components/IconButton';

export interface SectionProps {
  children: any;
  className: string;
}

export const Section = ({ children, className }: SectionProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const { collapse } = useContext(NoteContext);
  useEffect(() => {
    setIsOpen(!collapse);
  }, [collapse]);

  if (className === 'h0Wrapper headingWrapper') {
    return <div className="preHeadingContent"> {children}</div>;
  }
  const [head, ...rest] = Array.isArray(children) ? children : [children];

  return (
    <div className="sec">
      <div style={{ display: 'block' }}>
        <div
          className="headingFlex"
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingTop: '0.5rem',
          }}
        >
          {isOpen ? (
            <>
              <IconButton
                size={'1rem'}
                title={'Collapse heading'}
                className={'viewerHeadingButton'}
                onClick={() => setIsOpen(!isOpen)}
              >
                <ChevronDownIcon />
              </IconButton>
              <IconButton
                size={'1rem'}
                title={'Collapse heading'}
                className={'outlineHeadingButton'}
                onClick={() => setIsOpen(!isOpen)}
              >
                <VscCircleFilled />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton
                size={'1rem'}
                title={'Expand heading'}
                className={'viewerHeadingButton'}
                onClick={() => setIsOpen(!isOpen)}
              >
                <ChevronUpIcon />
              </IconButton>
              <IconButton
                size={'1rem'}
                title={'Expand heading'}
                className={'outlineHeadingButton'}
                onClick={() => setIsOpen(!isOpen)}
              >
                <VscCircle />
              </IconButton>
            </>
          )}
          {head}
        </div>
      </div>
      {isOpen && rest.length > 0 && (
        <div className="sectionContent">{rest}</div>
      )}
    </div>
  );
};
