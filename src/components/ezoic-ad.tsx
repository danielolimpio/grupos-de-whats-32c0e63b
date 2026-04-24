// Ezoic Ad Placeholders Component
// Each placeholder ID corresponds to a specific ad placement

export type EzoicPlacement = 
  | 'top_of_page'           // 101
  | 'under_page_title'      // 102
  | 'bottom_of_page'        // 103
  | 'sidebar'               // 104
  | 'sidebar_middle'        // 105
  | 'sidebar_bottom'        // 106
  | 'sidebar_floating_1'    // 107
  | 'sidebar_floating_2'    // 108
  | 'under_first_paragraph' // 109
  | 'under_second_paragraph'// 110
  | 'mid_content'           // 111
  | 'long_content'          // 112
  | 'longer_content'        // 113
  | 'longest_content'       // 114
  | 'incontent_5';          // 115

const placementIds: Record<EzoicPlacement, number> = {
  top_of_page: 101,
  under_page_title: 102,
  bottom_of_page: 103,
  sidebar: 104,
  sidebar_middle: 105,
  sidebar_bottom: 106,
  sidebar_floating_1: 107,
  sidebar_floating_2: 108,
  under_first_paragraph: 109,
  under_second_paragraph: 110,
  mid_content: 111,
  long_content: 112,
  longer_content: 113,
  longest_content: 114,
  incontent_5: 115,
};

interface EzoicAdProps {
  placement: EzoicPlacement;
  className?: string;
}

export function EzoicAd({ placement, className = '' }: EzoicAdProps) {
  const id = placementIds[placement];

  return <div id={`ezoic-pub-ad-slot-${id}`} className={className} data-ad-slot={placement} aria-hidden="true" />;
}

// Sidebar-specific component with all sidebar placements
export function EzoicSidebarAds() {
  return (
    <>
      <EzoicAd placement="sidebar" />
      <EzoicAd placement="sidebar_middle" className="my-4" />
      <EzoicAd placement="sidebar_bottom" className="my-4" />
    </>
  );
}

// Floating sidebar ads component
export function EzoicFloatingAds() {
  return (
    <div className="hidden xl:block fixed right-4 top-1/3 space-y-4 z-40">
      <EzoicAd placement="sidebar_floating_1" />
      <EzoicAd placement="sidebar_floating_2" />
    </div>
  );
}

// Content ads for long articles (use based on content length)
export function EzoicContentAds({ contentLength = 'short' }: { contentLength?: 'short' | 'medium' | 'long' | 'very_long' }) {
  return (
    <>
      <EzoicAd placement="under_first_paragraph" className="my-4" />
      <EzoicAd placement="under_second_paragraph" className="my-4" />
      {(contentLength === 'medium' || contentLength === 'long' || contentLength === 'very_long') && (
        <EzoicAd placement="mid_content" className="my-4" />
      )}
      {(contentLength === 'long' || contentLength === 'very_long') && (
        <EzoicAd placement="long_content" className="my-4" />
      )}
      {contentLength === 'very_long' && (
        <>
          <EzoicAd placement="longer_content" className="my-4" />
          <EzoicAd placement="longest_content" className="my-4" />
          <EzoicAd placement="incontent_5" className="my-4" />
        </>
      )}
    </>
  );
}
