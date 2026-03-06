import { Header } from './blocks/Header/Header';

// Внутри компонента App:
return (
  <main className="min-h-screen bg-[#0a0a0c]">
    <Header currentPlatform="Matrix-Core.РФ" />
    <BlockOrchestrator blocks={blocks} loading={loading} />
  </main>
);
