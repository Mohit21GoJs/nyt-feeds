import { PureComponent } from 'react';
import { Siteframe } from 'pivotal-ui/react/siteframe';
import { Icon } from 'pivotal-ui/react/iconography';
import { Panel } from 'pivotal-ui/react/panels';
import { FlexCol } from 'pivotal-ui/react/flex-grids';
import { Input } from 'pivotal-ui/react/inputs';

export default class ArticleList extends PureComponent {
    state = {
        name: 'mash',
    };

    render() {
        return (
            <div style={{ position: 'relative', height: '350px' }}>
                <Siteframe
                    headerProps={{
                        logo: <div className="ptl pbl pll" style={{ fontSize: '40px' }}><Icon src="react" style={{ fill: 'currentColor' }} /></div>,
                        companyName: 'NYT Demo Feeds',
                    }}>
                    <div className="bg-light-gray pal">
                        <Panel {...{ title: 'Domains' }}>
                            These are the domains.
                    </Panel>
                    </div>
                </Siteframe>
            </div>
        );
    }
}
