import { AppProviders } from 'base/AppProviders';
import { Banner } from 'components/Banner';
import { Header } from 'components/Header';
import { MessageBox } from 'components/MessageBox';
import { Airdrop } from 'pages/airdrop';
import { BAsset } from 'pages/basset';
import { Borrow } from 'pages/borrow';
import { Earn } from 'pages/earn';
import { Governance } from 'pages/gov';
import { govPathname } from 'pages/gov/env';
import { Redirect, Route, Switch } from 'react-router-dom';

export function App({ isDemo = false }: { isDemo?: boolean }) {
  return (
    <AppProviders isDemo={isDemo}>
      <div>
        <Header />
        <Banner />
        <MessageBox
          level="info"
          hide={{ id: 'announcement1', period: 1000 * 60 * 60 * 24 * 7 }}
          style={{
            margin: '30px 30px 0 30px',
          }}
        >
          Some time is required for accurate data to be displayed on the Anchor
          web app. Information displayed may vary until the necessary amount of
          data has been collected.
        </MessageBox>
        <Switch>
          <Route path="/earn" component={Earn} />
          <Route path="/borrow" component={Borrow} />
          <Route path="/bond" component={BAsset} />
          <Route path="/airdrop" component={Airdrop} />
          {!isDemo && <Route path={`/${govPathname}`} component={Governance} />}
          <Redirect to="/earn" />
        </Switch>
      </div>
    </AppProviders>
  );
}