import { memo, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import {
  useSandpack,
  useActiveCode,
  SandpackCodeEditor,
  // SandpackReactDevTools,
  SandpackLayout,
} from '@codesandbox/sandpack-react';
import { cn } from '@/lib/utils';

// import { IconChevron } from 'components/Icon/IconChevron';
import { NavigationBar } from './NavigationBar';
import { Preview } from './Preview';

// import { useSandpackLint } from './useSandpackLint';

export const CustomPreset = memo(function CustomPreset({
  showDevTools,
  onDevToolsLoad,
  devToolsLoaded,
  providedFiles,
}) {
  // const { lintErrors, lintExtensions } = useSandpackLint();
  const { sandpack } = useSandpack();
  const { code } = useActiveCode();
  const { activeFile } = sandpack;
  const lineCountRef = useRef({});
  if (!lineCountRef.current[activeFile]) {
    lineCountRef.current[activeFile] = code.split('\n').length;
  }
  const lineCount = lineCountRef.current[activeFile];
  const isExpandable = lineCount > 16;
  return (
    <SandboxShell
      showDevTools={showDevTools}
      onDevToolsLoad={onDevToolsLoad}
      devToolsLoaded={devToolsLoaded}
      providedFiles={providedFiles}
      // lintErrors={lintErrors}
      // lintExtensions={lintExtensions}
      isExpandable={isExpandable}
    />
  );
});

const SandboxShell = memo(function SandboxShell({
  showDevTools,
  onDevToolsLoad,
  devToolsLoaded,
  providedFiles,
  lintErrors,
  lintExtensions,
  isExpandable,
}) {
  const containerRef = useRef();
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <div
        className="dark:shadow-lg-dark rounded-lg shadow-lg"
        ref={containerRef}
        style={{
          contain: 'content',
        }}
      >
        <NavigationBar providedFiles={providedFiles} />
        <SandpackLayout
          className={cn(
            'flex',
            !(isExpandable || isExpanded) && 'overflow-hidden rounded-b-lg',
            isExpanded && 'sp-layout-expanded'
          )}
        >
          <SandpackCodeEditor
            showLineNumbers
            showInlineErrors
            style={{ backgroundColor: 'transparent' }}
            showTabs={false}
            showRunButton={false}
          />
          <Preview className="order-last xl:order-2" isExpanded={isExpanded} lintErrors={lintErrors} />
          {(isExpandable || isExpanded) && (
            <button
              translate="yes"
              className="sandpack-expand bg-wash border-b-1 dark:border-card-dark dark:bg-card-dark relative  top-0 z-10 flex w-full items-center justify-between p-1 text-base lg:order-last"
              onClick={() => {
                const nextIsExpanded = !isExpanded;
                flushSync(() => {
                  setIsExpanded(nextIsExpanded);
                });
                if (!nextIsExpanded && containerRef.current !== null) {
                  if (containerRef.current.scrollIntoViewIfNeeded) {
                    containerRef.current.scrollIntoViewIfNeeded();
                  } else {
                    containerRef.current.scrollIntoView({
                      block: 'nearest',
                      inline: 'nearest',
                    });
                  }
                }
              }}
            >
              <span className="text-primary dark:text-primary-dark flex p-2 leading-[20px] focus:outline-none dark:text-[#149eca]">
                {/* <IconChevron className="mr-1.5 inline text-xl" displayDirection={isExpanded ? 'up' : 'down'} /> */}
                {isExpanded ? 'Show less' : 'Show more'}
              </span>
            </button>
          )}
        </SandpackLayout>

        {/* {showDevTools && (
          // @ts-ignore TODO(@danilowoz): support devtools
          <SandpackReactDevTools onLoadModule={onDevToolsLoad} />
        )} */}
      </div>
    </>
  );
});
