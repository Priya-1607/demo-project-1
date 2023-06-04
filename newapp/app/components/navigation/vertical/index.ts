// ** Icon imports
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PublishedWithChangesSharpIcon from "@mui/icons-material/PublishedWithChangesSharp";
// ** Type import
//import { VerticalNavItemsType } from "src/@core/layouts/types";
import { AdminPanelSettings, ShoppingBag } from "@mui/icons-material";
import {VerticalNavItemsType} from "@/app/components/navigation/vertical/types";

const navigation = (): VerticalNavItemsType => {
    return [
        {
            title: "User Management",
            icon: ManageAccountsIcon,
            path: "/user-management",

        },
        {
            title: "Bank Account",

            icon: AccountBalanceIcon,
            path: "/bank-account",
        },
        {
            title: "Bank Transfer",

            icon: ManageAccountsIcon,
            path: "/bank-transfer",
        },
        {
            path: "/transactions",
            title: "Transactions",
            icon: PublishedWithChangesSharpIcon,
            children: [
                {
                    title: "Withdraw",
                    path: "/withdraw",
                },
                {
                    title: "Deposit",
                    path: "/deposit",
                },
            ],
        },
        {
            title: "Crypto Basket",
            icon: ShoppingBag,
            path: "/crypto-basket",
            children: [
                {
                    title: "Basket",
                    path: "/crypto-basket",
                },
                {
                    title: "Basket History",
                    path: "/basket-history",
                },

            ],
        },

        {
            title: "Trade History",

            icon: ManageAccountsIcon,
            path: "/trade-history",
        },
        {
            title: "Rate Management",
            icon: ManageAccountsIcon,
            path: "/rate-management",
        },
        {
            path: "/admin-users",
            title: "Admin Users",
            icon: AdminPanelSettings,
            children: [
                {
                    title: "Users",
                    path: "/users",
                },
                {
                    title: "Roles",
                    path: "/roles",
                },
                {
                    title: "Permissions",
                    path: "/permissions",
                },
            ],
        },
    ];
};

export default navigation;
