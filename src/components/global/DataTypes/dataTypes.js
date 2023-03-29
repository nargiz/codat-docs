export const accounting = [
  {
    key: "chartOfAccounts",
    name: "Accounts",
    schema: "/accounting-api#/schemas/Account",
    product: "accounting",
    description: "Accounts are the categories a business uses to record accounting transactions.",
  },
  {
    key: "accountTransactions",
    name: "Account transactions",
    schema: "/accounting-api#/schemas/AccountTransaction",
    product: "accounting",
    description: "Account transactions represent bank activity within an accounting platform.",
  },
  {
    key: "agedCreditor",
    name: "Aged creditor report",
    schema: "/accounting-api#/schemas/AgedCreditorReport",
    product: "accounting",
    description: "The total balance owed by a business to its suppliers over time.",
  },
  {
    key: "agedDebtor",
    name: "Aged debtor report",
    schema: "/accounting-api#/schemas/AgedDebtorReport",
    product: "accounting",
    description: "The total outstanding balance due from customers to the business over time.",
  },
  {
    key: "attachments",
    name: "Attachments",
    schema: "/accounting-api#/schemas/Attachment",
    product: "accounting",
    description: "File attachments for invoices, bills, direct costs, and direct incomes.",
  },
  {
    key: "balanceSheet",
    name: "Balance sheet",
    schema: "/accounting-api#/schemas/BalanceSheet",
    product: "accounting",
    description: "A snapshot of a company's accounts at a single point in time that provides a statement of the assets, liabilities and equity of an organization.",
  },
  {
    key: "bankAccounts",
    name: "Bank accounts",
    schema: "/accounting-api#/schemas/BankAccount",
    product: "accounting",
    description: "Bank accounts associated with a company and a specific data connection.",
  },
  {
    key: "bankTransactions",
    name: "Bank transactions",
    schema: "/accounting-api#/schemas/BankTransactions",
    product: "accounting",
    description: "Transactional banking data for a specific company and account.",
  },
  {
    key: "bills",
    name: "Bills",
    schema: "/accounting-api#/schemas/Bill",
    product: "accounting",
    description: "Bills, including line items.",
  },
  {
    key: "billCreditNotes",
    name: "Bill credit notes",
    schema: "/accounting-api#/schemas/BillCreditNote",
    product: "accounting",
    description: "A bill credit note is issued by a supplier for the purpose of recording credit.",
  },
  {
    key: "billPayments",
    name: "Bill payments",
    schema: "/accounting-api#/schemas/BillPayment",
    product: "accounting",
    description: "Bill payments include all accounts payable transaction data.",
  },
  {
    key: "cashFlowStatement",
    name: "Cash flow statement",
    schema: "/accounting-api#/schemas/CashFlowStatement",
    product: "accounting",
    description: "A financial report that records all cash that is received or spent by a company during a given period.",
  },
  {
    key: "company",
    name: "Company info",
    schema: "/accounting-api#/schemas/CompanyDataset",
    product: "accounting",
    description: "Standard details about a linked company such as their address, phone number, and company registration.",
  },
  {
    key: "creditNotes",
    name: "Credit notes",
    schema: "/accounting-api#/schemas/CreditNote",
    product: "accounting",
    description: "Reductions that can be applied against one or multiple invoices",
  },
  {
    key: "customers",
    name: "Customers",
    schema: "/accounting-api#/schemas/Customer",
    product: "accounting",
    description: "People or organisations that have purchased goods or services from the company.",
  },
  {
    key: "directCosts",
    name: "Direct costs",
    schema: "/accounting-api#/schemas/DirectCost",
    product: "accounting",
    description: "A type of account transaction.",
  },
  {
    key: "directIncomes",
    name: "Direct incomes",
    schema: "/accounting-api#/schemas/DirectIncome",
    product: "accounting",
    description: "A type of account transaction.",
  },
  {
    key: "invoices",
    name: "Invoices",
    schema: "/accounting-api#/schemas/Invoice",
    product: "accounting",
    description: "An invoice is an itemized record of goods sold or services provided to a customer.",
  },
  {
    key: "items",
    name: "Items",
    schema: "/accounting-api#/schemas/Item",
    product: "accounting",
    description: "Items allow your customers to save and track details of the products and services that they buy and sell.",
  },
  {
    key: "journals",
    name: "Journals",
    schema: "/accounting-api#/schemas/Journal",
    product: "accounting",
    description: "Journals are used to record all the financial transactions of a company.",
  },
  {
    key: "journalEntries",
    name: "Journal entries",
    schema: "/accounting-api#/schemas/JournalEntry",
    product: "accounting",
    description: "The entries made in a company's general ledger, or accounts, when transactions are approved.",
  },
  {
    key: "payments",
    name: "Payments",
    schema: "/accounting-api#/schemas/Payment",
    product: "accounting",
    description: "Payments include all accounts receivable transaction data. This includes invoices and credit notes.",
  },
  {
    key: "paymentMethods",
    name: "Payment methods",
    schema: "/accounting-api#/schemas/PaymentMethod",
    product: "accounting",
    description: "A Payment Method represents the payment method(s) used to pay a Bill.",
  },
  {
    key: "profitAndLoss",
    name: "Profit and loss",
    schema: "/accounting-api#/schemas/ProfitAndLossReport",
    product: "accounting",
    description: "A report of the financial performance of a company over a specified time period.",
  },
  {
    key: "purchaseOrders",
    name: "Purchase orders",
    schema: "/accounting-api#/schemas/PurchaseOrder",
    product: "accounting",
    description: "A business's intent to purchase goods or services from a supplier.",
  },
  {
    key: "salesOrders",
    name: "Sales orders",
    schema: "/accounting-api#/schemas/SalesOrder",
    product: "accounting",
    description: "A customer's intention to purchase goods or services from a seller.",
  },
  {
    key: "suppliers",
    name: "Suppliers",
    schema: "/accounting-api#/schemas/Supplier",
    product: "accounting",
    description: "Suppliers to the company of goods and services.",
  },
  {
    key: "taxRates",
    name: "Tax rates",
    schema: "/accounting-api#/schemas/TaxRate",
    product: "accounting",
    description: "A rate of tax, e.g. UK sales VAT, ",
  },
  {
    key: "trackingCategories",
    name: "Tracking categories",
    schema: "/accounting-api#/schemas/TrackingCategory",
    product: "accounting",
    description: "Details of a category used for tracking transactions.",
  },
  {
    key: "transfers",
    name: "Transfers",
    schema: "/accounting-api#/schemas/Transfer",
    product: "accounting",
    description: "A type of transaction, recording the movement of money between two bank accounts, or between a bank account and a nominal account.",
  },
]

export const banking = [
  {
    key: "banking-accounts",
    name: "Accounts",
    schema: "/banking-api#/schemas/Account",
    product: "banking",
    description: "The SMB's bank accounts, with rich data like balances, account numbers and institutions holding the accounts.",
  },
  {
    key: "banking-accountBalances",
    name: "Account balances",
    schema: "/banking-api#/schemas/AccountBalance",
    product: "banking",
    description: "Balances for a bank account including end-of-day batch balance or running balances per transaction.",
  },
  {
    key: "banking-transactions",
    name: "Transactions",
    schema: "/banking-api#/schemas/Transaction",
    product: "banking",
    description: "Transactions incurred by the bank account.",
  },
  {
    key: "banking-transactionCategories",
    name: "Transaction categories",
    schema: "/banking-api#/schemas/TransactionCategory",
    product: "banking",
    description: "Hierarchical categories associated with a transaction for greater contextual meaning to transaction activity.",
  },
]

export const commerce = [
  {
    key: "commerce-companyInfo",
    name: "Company info",
    schema: "/commerce-api#/schemas/CompanyInfo",
    product: "commerce",
    description: "Details of a company, such as their address, phone number, and company registration.",
  },
  {
    key: "commerce-customers",
    name: "Customers",
    schema: "/commerce-api#/schemas/Customer",
    product: "commerce",
    description: "Customers who have placed orders with the company.",
  },
  {
    key: "commerce-disputes",
    name: "Disputes",
    schema: "/commerce-api#/schemas/Dispute",
    product: "commerce",
    description: "Transactions that customers have challenged.",
  },
  {
    key: "commerce-locations",
    name: "Locations",
    schema: "/commerce-api#/schemas/Locations",
    product: "commerce",
    description: "Geographic locations where product variant inventory is held.",
  },
  {
    key: "commerce-orders",
    name: "Orders",
    schema: "/commerce-api#/schemas/Order",
    product: "commerce",
    description: "Orders received by a company, including payments, service charges, and refunds.",
  },
  {
    key: "commerce-payments",
    name: "Payments",
    schema: "/commerce-api#/schemas/Payment",
    product: "commerce",
    description: "Amounts reserved against the customer's funding source.",
  },
  {
    key: "commerce-paymentMethods",
    name: "Payment methods",
    schema: "/commerce-api#/schemas/PaymentMethod",
    product: "commerce",
    description: "Represents the payment methods used by customers to make payments.",
  },
  {
    key: "commerce-products",
    name: "Products",
    schema: "/commerce-api#/schemas/Product",
    product: "commerce",
    description: "Products a company has available on the system, including the price and quantity of those products, and product variants.",
  },
  {
    key: "commerce-productCategories",
    name: "Product categories",
    schema: "/commerce-api#/schemas/ProductCategory",
    product: "commerce",
    description: "Categories of products.",
  },
  {
    key: "commerce-taxComponents",
    name: "Tax components",
    schema: "/commerce-api#/schemas/TaxComponent",
    product: "commerce",
    description: "Tax rates data from the commerce platform.",
  },
  {
    key: "commerce-transactions",
    name: "Transactions",
    schema: "/commerce-api#/schemas/Transaction",
    product: "commerce",
    description: "Financial transactions recorded in the system.",
  },
]

export const bankfeeds = [
  {
    key: "bankfeedsbankaccount",
    name: "Bank account",
    schema: "/bank-feeds-api#/schemas/BankFeedBankAccount",
    product: "bank-feeds",
    description: "The target bank account in a supported accounting package for ingestion into a bank feed.",
  },
]

export const dataTypes = [
  ...accounting,
  ...banking,
  ...commerce,
  ...bankfeeds,
]